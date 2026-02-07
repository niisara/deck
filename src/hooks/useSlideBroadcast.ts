import { useEffect, useRef, type MutableRefObject } from 'react';

interface SlideMessage {
  type: 'slide-change';
  deckId: string;
  indexh: number;
  indexv: number;
  senderId: string;
}

const CHANNEL_NAME = 'deck-slide-broadcast';

/**
 * Hook that broadcasts slide changes to all other open tabs/windows
 * showing the same deck, and listens for incoming slide changes.
 *
 * Uses the BroadcastChannel API for zero-config same-origin messaging.
 *
 * NOTE: Accepts a React ref to the Reveal instance (not .current) so it
 * can read the live value inside event handlers without stale closures.
 */
export function useSlideBroadcast(
  deckId: string | undefined,
  revealInstanceRef: MutableRefObject<any | null>,
  enabled: boolean
) {
  const channelRef = useRef<BroadcastChannel | null>(null);
  const senderIdRef = useRef<string>(
    `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  );
  // Flag to suppress re-broadcasting when we receive a remote change
  const suppressBroadcastRef = useRef(false);
  // Keep enabled in a ref so the Reveal.js event handler always sees the latest value
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  // --- Open / close the channel when enabled changes ---
  useEffect(() => {
    if (!enabled || !deckId) {
      channelRef.current?.close();
      channelRef.current = null;
      return;
    }

    const channel = new BroadcastChannel(CHANNEL_NAME);
    channelRef.current = channel;

    // Listen for messages from other tabs
    channel.onmessage = (event: MessageEvent<SlideMessage>) => {
      const msg = event.data;
      const reveal = revealInstanceRef.current;
      if (
        msg.type === 'slide-change' &&
        msg.deckId === deckId &&
        msg.senderId !== senderIdRef.current &&
        reveal
      ) {
        // Suppress the slidechanged event that this navigation will fire
        suppressBroadcastRef.current = true;
        reveal.slide(msg.indexh, msg.indexv);
        // Reset flag after Reveal.js processes the change
        requestAnimationFrame(() => {
          suppressBroadcastRef.current = false;
        });
      }
    };

    return () => {
      channel.close();
      channelRef.current = null;
    };
  }, [enabled, deckId, revealInstanceRef]);

  // --- Broadcast current slide to other tabs (called from slidechanged) ---
  const broadcastSlide = (indexh: number, indexv: number) => {
    if (
      !enabledRef.current ||
      suppressBroadcastRef.current ||
      !channelRef.current ||
      !deckId
    )
      return;

    const msg: SlideMessage = {
      type: 'slide-change',
      deckId,
      indexh,
      indexv,
      senderId: senderIdRef.current,
    };
    channelRef.current.postMessage(msg);
  };

  // Store broadcastSlide in a ref so the Reveal event handler never has a stale reference
  const broadcastRef = useRef(broadcastSlide);
  broadcastRef.current = broadcastSlide;

  return { broadcastRef };
}
