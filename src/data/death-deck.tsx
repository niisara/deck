import type { Deck } from './types';

export const deathDeck: Deck = {
  id: 'death-deck',
  name: 'Death',
  description: 'A confrontational meditation on mortality and physical decay',
  category: 'Personal',
  theme: 'black',
  slides: [],
  slideGroups: [
    {
      id: 'slide-1',
      title: 'This will happen to me. Not in theory. Not someday. To this body.',
      slides: [
        {
          id: 1,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This will happen to me.<br/>
              Not in theory.<br/>
              Not someday.<br/>
              To this body.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Opening slide: Direct confrontation with personal mortality'
        },
        {
          id: 2,
          title: 'The body will fail — not heroically',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              One day, your words will not come out right.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will know exactly what you want to say —<br/>
              and your mouth will not obey.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              People will finish your sentences for you.<br/>
              Sometimes incorrectly.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will be corrected about your own intentions.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will nod, because correcting them is too tiring.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Loss of speech and communication'
        },
        {
          id: 3,
          title: 'Control will leave before life does',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              At some point, your body will release waste without asking you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You won't feel dramatic sorrow.<br/>
              You'll feel embarrassment, then resignation.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Someone else will clean you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Not once.<br/>
              Not as an exception.<br/>
              <strong>As routine.</strong>
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will apologize — even though it is not your fault.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Loss of bodily control and dignity'
        },
        {
          id: 4,
          title: 'Your face will become unfamiliar',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will look in the mirror and not recognize yourself.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Not metaphorically.<br/>
              Literally.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your brain will see a stranger wearing your expression.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Sometimes you'll forget you're old.<br/>
              Then catch your reflection.<br/>
              And remember.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Each time will feel like the first time.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Loss of self-recognition'
        },
        {
          id: 5,
          title: 'Pain will become your weather',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will wake up with pain.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will plan your day around it.<br/>
              Calculate how much you can endure.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will become an expert in types of ache:<br/>
              Sharp. Dull. Throbbing. Constant. Shooting.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will rate your pain on scales.<br/>
              Over and over again.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              It will bore you before it kills you.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Chronic pain becomes constant companion'
        },
        {
          id: 6,
          title: 'Your mind will betray you quietly',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will forget the word for common things.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will call your children by the wrong names.<br/>
              Then forget you made the mistake.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will tell the same story three times in one hour.<br/>
              Each time will feel like the first.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              People will smile patiently.<br/>
              You won't notice.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              The you that remembers will fade before the you that exists.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Cognitive decline and memory loss'
        },
        {
          id: 7,
          title: 'You will become a burden',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will need help getting dressed.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will see the flicker of frustration in their eyes.<br/>
              The forced smile.<br/>
              The controlled patience.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will hear them sigh when they think you can't hear.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will apologize for existing.<br/>
              For needing.<br/>
              For still being here.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And you will mean it.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Becoming dependent on others'
        }
      ]
    },
    {
      id: 'slide-2',
      title: 'This decay will claim me. Not in fantasy. Not eventually. To these bones and flesh.',
      slides: [
        {
          id: 8,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This decay will claim me.<br/>
              Not in fantasy.<br/>
              Not eventually.<br/>
              To these bones and flesh.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Physical decay section opening'
        },
        {
          id: 9,
          title: 'Your skin will paper and tear',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your skin will become thin as tissue paper.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              A simple bump will tear it open.<br/>
              Blood will seep through bandages.<br/>
              Wounds will refuse to heal.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your hands will show every vein.<br/>
              Purple and blue like a roadmap of decay.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will pull at the loose skin on your hands.<br/>
              It will stay where you left it.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Taking minutes to slowly fall back.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Skin deterioration'
        },
        {
          id: 10,
          title: 'Your bones will hollow and crack',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your bones will become brittle, porous, light.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will break a rib from coughing.<br/>
              A hip from standing.<br/>
              A vertebra from sitting wrong.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Each fracture will heal slower than the last.<br/>
              If it heals at all.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will shrink.<br/>
              Your spine will curve.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              The body you stand in will collapse inward.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Bone deterioration and osteoporosis'
        },
        {
          id: 11,
          title: 'Your heart will strain and stutter',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your heart will work harder to accomplish less.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will feel it skip beats.<br/>
              Race for no reason.<br/>
              Pause for too long.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Walking to the bathroom will exhaust you.<br/>
              You will need to sit down halfway.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will count your breaths.<br/>
              Wonder which one will be the last.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Then be disappointed it wasn't.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Cardiovascular decline'
        },
        {
          id: 12,
          title: 'Your organs will fail in sequence',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your kidneys will filter less.<br/>
              Your liver will process slower.<br/>
              Your lungs will capture less oxygen.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Toxins will build up in your blood.<br/>
              You will taste metal.<br/>
              Your breath will smell like decay.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your body will retain fluid.<br/>
              Your ankles will swell.<br/>
              Your belly will distend.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will look pregnant with your own death.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Multiple organ failure'
        },
        {
          id: 13,
          title: 'Your muscles will waste and atrophy',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your muscles will consume themselves for fuel.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your arms will thin until bone shows through.<br/>
              Your legs will barely hold you.<br/>
              Your hands will shake from the effort of holding a cup.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will drop things.<br/>
              Spill things.<br/>
              Break things.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              People will start cutting your food for you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Then feeding you.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Muscle atrophy and sarcopenia'
        },
        {
          id: 14,
          title: 'Your eyes will fail you',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your world will become blurry, then dark.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Colors will fade to gray.<br/>
              Faces will become shadows.<br/>
              You will see halos around lights.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will reach for things that aren't there.<br/>
              Miss things that are.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Reading will become impossible.<br/>
              Then recognizing faces.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Then light itself will go.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Vision loss and blindness'
        },
        {
          id: 15,
          title: 'Your teeth will loosen and fall',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your gums will recede and bleed.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your teeth will wiggle when you touch them.<br/>
              Then fall out one by one.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will find them in your food.<br/>
              On your pillow.<br/>
              In your hand after coughing.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your face will collapse inward.<br/>
              Your words will slur.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will smile and look like a corpse.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Dental decay'
        }
      ]
    },
    {
      id: 'slide-3',
      title: 'This isolation will hollow me. Not as metaphor. Not as possibility. In lived experience.',
      slides: [
        {
          id: 16,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This isolation will hollow me.<br/>
              Not as metaphor.<br/>
              Not as possibility.<br/>
              In lived experience.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Social isolation section opening'
        },
        {
          id: 17,
          title: 'You will outlive everyone you love',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will attend funeral after funeral.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your friends will die.<br/>
              Your siblings will die.<br/>
              If you're unlucky enough — your children will die.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Each death will take a piece of your history.<br/>
              Stories only you two shared.<br/>
              Jokes no one else will understand.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will become the sole keeper of memories.<br/>
              Then you will forget them too.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And no one will be left to remind you.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Outliving loved ones'
        },
        {
          id: 18,
          title: 'People will visit less and less',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              At first, they will visit often.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Then once a week.<br/>
              Then once a month.<br/>
              Then on holidays only.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will understand.<br/>
              They have lives.<br/>
              Responsibilities.<br/>
              You are not the center anymore.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will wait by the phone for calls that don't come.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And you will not blame them. But you will notice.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Decreasing visits and contact'
        },
        {
          id: 19,
          title: 'You will talk to yourself',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Days will pass without another voice.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will narrate your actions to the empty room.<br/>
              "Now I'll make tea."<br/>
              "Time for lunch."<br/>
              "Where did I put that?"
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will answer yourself.<br/>
              Have full conversations alone.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will forget what your voice sounds like to others.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Because there are no others.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Self-dialogue in isolation'
        },
        {
          id: 20,
          title: 'The world will forget you exist',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your emails will go unanswered.<br/>
              Your calls unreturned.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your opinions will be dismissed as outdated.<br/>
              Your stories as repetitive.<br/>
              Your presence as optional.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will realize you could die tomorrow<br/>
              and most people wouldn't know<br/>
              for weeks.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Or months.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And life would continue exactly as it does now.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Social irrelevance'
        },
        {
          id: 21,
          title: 'You will become invisible',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              People will look through you in public.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Waiters will serve you last.<br/>
              Store clerks will ignore you.<br/>
              Young people will talk over you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will stand in line and be skipped.<br/>
              You will raise your hand and not be called on.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will speak and people will not hear you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will wonder if you've already died and no one told you.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Social invisibility'
        },
        {
          id: 22,
          title: 'You will sleep alone',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              The bed will be too big.<br/>
              Too cold.<br/>
              Too quiet.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will reach out in the night<br/>
              for someone who isn't there.<br/>
              Who hasn't been there for years.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will wake up and forget they're gone.<br/>
              Then remember.<br/>
              Every single morning.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will talk to their photo.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              It will not answer.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Sleeping alone after loss'
        }
      ]
    },
    {
      id: 'slide-4',
      title: 'This terror will find me. Not in nightmares. Not theoretically. In the darkness at 3 AM.',
      slides: [
        {
          id: 23,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This terror will find me.<br/>
              Not in nightmares.<br/>
              Not theoretically.<br/>
              In the darkness at 3 AM.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Fear and anxiety section opening'
        },
        {
          id: 24,
          title: 'You will be afraid of falling',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Every step will be a calculation.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will grip railings with white knuckles.<br/>
              Look down at your feet constantly.<br/>
              Shuffle instead of walk.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will refuse invitations because of stairs.<br/>
              Avoid wet floors.<br/>
              Panic at uneven pavement.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will know that one fall could be the last.<br/>
              A broken hip means bedridden.<br/>
              Bedridden means pneumonia.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Pneumonia means death.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Fear of falling'
        },
        {
          id: 25,
          title: 'You will be afraid of being alone when it happens',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will imagine the scenarios.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Falling in the bathroom and not being found.<br/>
              Choking with no one to help.<br/>
              The heart attack in the middle of the night.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will keep your phone charged at all times.<br/>
              Within reach.<br/>
              But wonder if you'll be able to dial.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will see the news stories.<br/>
              Elderly person found dead after three days.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will know that could be you.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Fear of dying alone'
        },
        {
          id: 26,
          title: 'You will be afraid of hospitals',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will know that going in doesn't mean coming out.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will resist calling the ambulance.<br/>
              Downplay symptoms.<br/>
              "I'll be fine."
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Because you've seen too many people<br/>
              go in for something simple<br/>
              and never come home.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will pack a bag "just in case."<br/>
              Leave notes for what to do if—
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You can't finish writing that sentence.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Fear of medical intervention'
        },
        {
          id: 27,
          title: 'You will be afraid of forgetting',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Every memory lapse will terrify you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Was that normal?<br/>
              Or is it starting?
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will test yourself constantly.<br/>
              What day is it?<br/>
              What did I eat for breakfast?<br/>
              What's my daughter's name?
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will fear becoming a stranger to yourself.<br/>
              Losing your memories.<br/>
              Your personality.<br/>
              Your self.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And still being alive when it's all gone.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Fear of dementia'
        },
        {
          id: 28,
          title: 'You will be afraid of being a burden',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              This fear will consume you more than death itself.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will hide how much you're struggling.<br/>
              Pretend you can manage.<br/>
              Refuse help until you absolutely can't.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will calculate the cost of your care.<br/>
              Your children's inheritance disappearing.<br/>
              Their lives on hold for you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will think about how much easier it would be<br/>
              for everyone<br/>
              if you just—
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will think it often.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Fear of being a burden'
        },
        {
          id: 29,
          title: 'You will be afraid it will hurt',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will wonder which kind of death awaits you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Slow and painful?<br/>
              Fast but terrifying?<br/>
              Peaceful but lonely?
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will pray for quick.<br/>
              Hope for painless.<br/>
              Fear neither will come.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will have watched others die.<br/>
              Seen the morphine drip.<br/>
              Heard the gasping.<br/>
              Witnessed the fear in their eyes.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And you will know those eyes will be yours.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Fear of painful death'
        }
      ]
    },
    {
      id: 'slide-5',
      title: 'This pain will consume me. Not hypothetically. Not far off. In this suffering vessel.',
      slides: [
        {
          id: 30,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This pain will consume me.<br/>
              Not hypothetically.<br/>
              Not far off.<br/>
              In this suffering vessel.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Pain and suffering section opening'
        },
        {
          id: 31,
          title: 'Pain will become your constant companion',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will wake up in pain.<br/>
              You will go to sleep in pain.<br/>
              You will dream of pain.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              There will be no position that brings relief.<br/>
              No medication that truly works.<br/>
              No escape.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will forget what it felt like<br/>
              to simply exist without hurting.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Pain will become your baseline.<br/>
              Not the exception.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              The norm.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Chronic pain as constant'
        },
        {
          id: 32,
          title: 'You will beg for it to stop',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              There will be moments when the pain is so intense<br/>
              you will beg.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              To God.<br/>
              To nurses.<br/>
              To anyone who will listen.<br/>
              To no one.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will say "please" until it loses meaning.<br/>
              You will cry until there are no tears left.<br/>
              You will scream until your voice breaks.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              And the pain will continue.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Indifferent to your suffering.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Begging for relief'
        },
        {
          id: 33,
          title: 'You will wish for death',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              There will come a point when death seems merciful.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              When another day feels like a sentence.<br/>
              When morning light brings dread, not hope.<br/>
              When "getting better" sounds like a cruel joke.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will understand why people give up.<br/>
              Not from weakness.<br/>
              But from exhaustion.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              The will to live is not infinite.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Pain will erode it.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Wishing for death'
        },
        {
          id: 34,
          title: 'No one can feel it for you',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              People will say they understand.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              They don't.<br/>
              They can't.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              They will see your face contort.<br/>
              Hear you moan.<br/>
              Watch you suffer.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              But they will never feel what you feel.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You are alone in your pain.<br/>
              Trapped in a body that only you inhabit.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              No one can take it from you. No one can share it.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Isolation in suffering'
        },
        {
          id: 35,
          title: 'Your suffering will be normalized',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              At first, people will be alarmed by your pain.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              They will rush to help.<br/>
              Adjust pillows.<br/>
              Call doctors.<br/>
              Hold your hand.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              But pain that doesn't end becomes background noise.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              They will grow tired.<br/>
              Distracted.<br/>
              Resigned.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Your agony will become routine.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Normalization of suffering'
        },
        {
          id: 36,
          title: 'You will lose yourself to pain',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Pain will take your personality.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will become irritable.<br/>
              Demanding.<br/>
              Bitter.<br/>
              Angry.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will snap at people who love you.<br/>
              Push them away.<br/>
              Hate yourself for it.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              But you won't be able to stop.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Pain leaves no room for grace.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Pain changes personality'
        }
      ]
    },
    {
      id: 'slide-6',
      title: 'This regret will haunt me. Not as warning. Not as lesson. As lived truth.',
      slides: [
        {
          id: 37,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This regret will haunt me.<br/>
              Not as warning.<br/>
              Not as lesson.<br/>
              As lived truth.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Regret section opening'
        },
        {
          id: 38,
          title: 'You will remember what you didn\'t do',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              The trip you postponed.<br/>
              The book you never wrote.<br/>
              The words you never said.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              "There's always tomorrow."<br/>
              Except there isn't.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will lie in bed cataloging missed opportunities.<br/>
              Doors you walked past.<br/>
              Chances you were too afraid to take.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              And you will know, with terrible clarity:
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              It's too late now.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Regret of inaction'
        },
        {
          id: 39,
          title: 'You will remember who you hurt',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              The cruel words you said in anger.<br/>
              The trust you betrayed.<br/>
              The love you took for granted.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Their faces will come to you at night.<br/>
              The look in their eyes when you wounded them.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Some you can no longer apologize to.<br/>
              They're already gone.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Others wouldn't accept your apology anyway.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will carry this to the grave.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Regret of harm caused'
        },
        {
          id: 40,
          title: 'You will mourn the life you didn\'t live',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              There was another version of you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              The one who took that risk.<br/>
              Who said yes instead of no.<br/>
              Who didn't let fear decide.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              That person had a different life.<br/>
              Different loves.<br/>
              Different endings.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will never know what could have been.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Only that it wasn't.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Mourning unlived lives'
        },
        {
          id: 41,
          title: 'You will regret the time you wasted',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              The hours scrolling through nothing.<br/>
              The years in jobs you hated.<br/>
              The decades worrying about things that never happened.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You had time.<br/>
              So much time.<br/>
              And you spent it waiting.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              For the right moment.<br/>
              For enough money.<br/>
              For permission.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Now the time is gone.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And you're still waiting.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Regret of wasted time'
        },
        {
          id: 42,
          title: 'You will wish you had said "I love you" more',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You assumed they knew.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You showed it in other ways.<br/>
              Provided for them.<br/>
              Stayed.<br/>
              Sacrificed.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              But you didn't say it enough.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Now some of them are gone.<br/>
              And the words sit unsaid in your throat.<br/>
              Heavy. Useless. Too late.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              They cannot hear you anymore.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Regret of unspoken love'
        }
      ]
    },
    {
      id: 'slide-7',
      title: 'This loss of self will erase me. Not gradually. Not gently. Piece by piece.',
      slides: [
        {
          id: 43,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This loss of self will erase me.<br/>
              Not gradually.<br/>
              Not gently.<br/>
              Piece by piece.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Loss of identity section opening'
        },
        {
          id: 44,
          title: 'You will lose your roles',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You were a worker. Then you retired.<br/>
              You were a provider. Then you needed providing for.<br/>
              You were strong. Then you became weak.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              One by one, the things that defined you will be taken.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your career. Your independence. Your usefulness.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will wonder who you are without them.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And have no answer.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Loss of social roles'
        },
        {
          id: 45,
          title: 'You will lose your dignity',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Strangers will see you naked.<br/>
              Touch you intimately.<br/>
              Discuss your body as if you're not there.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will be talked about in third person<br/>
              while you're in the room.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              "He needs to be turned."<br/>
              "She had an accident again."
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will be a patient, a case, a room number.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Not a person anymore.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Loss of dignity'
        },
        {
          id: 46,
          title: 'You will lose your privacy',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Everything will be monitored.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              What you eat. When you sleep.<br/>
              When you use the bathroom.<br/>
              Whether you complied with medication.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Doors will be opened without knocking.<br/>
              Belongings will be moved without asking.<br/>
              Decisions will be made without consulting you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will have no secrets.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              No space that is yours alone.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Loss of privacy'
        },
        {
          id: 47,
          title: 'You will lose your voice',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Not just your physical voice.<br/>
              Your authority. Your agency. Your say.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Others will decide what's best for you.<br/>
              Where you live. What you eat. When you sleep.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will be overruled by family.<br/>
              By doctors.<br/>
              By well-meaning strangers.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your preferences will become suggestions.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Then ignored entirely.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Loss of agency'
        },
        {
          id: 48,
          title: 'You will become unrecognizable to yourself',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You will look at old photos and wonder:<br/>
              Who was that person?
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              So full of energy.<br/>
              So full of plans.<br/>
              So full of life.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will not feel connected to them.<br/>
              It will seem like someone else's story.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              The person you were is already dead.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Only the husk remains.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Disconnect from former self'
        }
      ]
    },
    {
      id: 'slide-8',
      title: 'This ending will claim me. Not as abstract. Not later. Now. Always now.',
      slides: [
        {
          id: 49,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.5em; font-style: italic; color: #e74c3c;">
              This ending will claim me.<br/>
              Not as abstract.<br/>
              Not later.<br/>
              Now. Always now.
            </p>
          `,
          backgroundColor: '#1a1a1a',
          notes: 'Final awareness section opening'
        },
        {
          id: 50,
          title: 'You are dying right now',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Every breath is one less you'll take.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Every heartbeat counts down.<br/>
              Every moment passes and will not return.<br/>
              Ever.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              The cells in your body are dying right now.<br/>
              Your telomeres are shortening.<br/>
              Your DNA is degrading.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You are not moving toward death.<br/>
              You are death in progress.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              A slow-motion decay that began the moment you were born.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Death is happening now'
        },
        {
          id: 51,
          title: 'There is no preparing',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You cannot practice dying.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You can think about it.<br/>
              Plan for it.<br/>
              Accept it philosophically.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              But when it comes—<br/>
              when you feel your body shutting down—<br/>
              when the darkness closes in—
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              All your preparation will mean nothing.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              You will be as afraid as anyone ever was.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'No preparation is enough'
        },
        {
          id: 52,
          title: 'Your last thoughts will be ordinary',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              You imagine you'll think profound things.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Review your life.<br/>
              Find meaning.<br/>
              Achieve closure.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              But you won't.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You'll think about the discomfort.<br/>
              The pain.<br/>
              Wanting water.<br/>
              Needing to pee.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Your last thought will probably be:<br/>
              "I'm cold."
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Or nothing at all.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Last thoughts are mundane'
        },
        {
          id: 53,
          title: 'Everything you are will stop',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your thoughts will cease.<br/>
              Your awareness will end.<br/>
              You will not exist.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Not sleeping.<br/>
              Not dreaming.<br/>
              Not anything.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              The you reading this will be gone.<br/>
              Erased.<br/>
              As if it never was.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              And you will not know it.<br/>
              Because there will be no you to know.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              Just... nothing. Forever.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Complete cessation of existence'
        },
        {
          id: 54,
          title: 'The world will continue without you',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              The sun will rise the day you die.<br/>
              And every day after.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              People will eat breakfast.<br/>
              Go to work.<br/>
              Laugh at jokes.<br/>
              Fall in love.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              The world you spent your entire life experiencing<br/>
              will continue as if you never existed.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Because to the world, you don't matter.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And soon, no one will remember you did.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'The world continues'
        },
        {
          id: 55,
          title: 'You will be forgotten',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              Your children will remember you.<br/>
              Then your grandchildren will remember stories about you.<br/>
              Then their children will not remember you at all.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Three generations.<br/>
              Maybe four.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              Then your name will be mentioned for the last time.<br/>
              By someone who never knew you.<br/>
              Who gets the details wrong.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              And then never again.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              As if you never existed at all.
            </p>
          `,
          backgroundColor: '#34495e',
          notes: 'Complete forgetting'
        },
        {
          id: 56,
          title: 'This is not avoidable',
          content: `
            <p style="text-align: left; font-size: 0.9em;">
              No amount of money will save you.<br/>
              No achievement will exempt you.<br/>
              No belief will rescue you.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You cannot negotiate with death.<br/>
              You cannot bargain.<br/>
              You cannot cheat.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              It is the one appointment you cannot miss.<br/>
              The one debt you cannot avoid.<br/>
              The one truth you cannot deny.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em;">
              You will die.
            </p>
            <p style="text-align: left; font-size: 0.9em; margin-top: 1em; color: #95a5a6;">
              And you know it.
            </p>
          `,
          backgroundColor: '#2c3e50',
          notes: 'Death is unavoidable'
        },
        {
          id: 57,
          center: true,
          title: '',
          content: `
            <p style="font-size: 1.2em; margin-top: 2em;">
              Don't distract yourself.<br/>
              Don't rationalize.<br/>
              Don't look away.
            </p>
            <p style="font-size: 1.2em; margin-top: 2em;">
              This will happen to you.
            </p>
            <p style="font-size: 1.2em; margin-top: 2em;">
              To this body.<br/>
              This mind.<br/>
              This awareness reading these words.
            </p>
            <p style="font-size: 1.5em; margin-top: 2em; color: #e74c3c;">
              You will die.
            </p>
            <p style="font-size: 1em; margin-top: 2em; color: #95a5a6;">
              Now what?
            </p>
          `,
          backgroundColor: '#000000',
          notes: 'Final confrontation - sitting with mortality'
        }
      ]
    }
  ]
};
