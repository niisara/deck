import type { Deck } from './types';
import { GSAPAnimated } from '../components/GSAPAnimated';

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
          content: (
            <GSAPAnimated animation="fadeIn" duration={2} delay={0.5}>
              <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                This will happen to me.<br/>
                Not in theory.<br/>
                Not someday.<br/>
                To this body.
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 1 — Opening: This Will Happen to Me
#### 🎯 Purpose
This is not an introduction. This is a confrontation. Let these words land slowly, heavily. The audience should feel the weight of personal mortality from the first breath.
#### 🎭 Delivery
Read each line slowly. Pause between them. Let silence do the work. This isn't about information — it's about *presence*. Make eye contact if you can. Let them feel that you mean *them*. Not humanity in general. Not a philosophical abstraction. *Them*.
#### 💡 The Shift
Most of us spend our lives in comfortable denial. We know death exists, but we keep it at arm's length — something that happens to other people, in other places, at other times. This slide shatters that distance. It says: *No. You. This body you're sitting in right now.*
> Let the silence after this slide last at least 5 seconds before moving on.
The next slides will begin exploring how the body fails — not dramatically, not heroically, but in small, humiliating ways that strip away our dignity piece by piece.`
        },
        {
          id: 2,
          title: 'The body will fail — not heroically',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  One day, your words will not come out right.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will know exactly what you want to say —<br/>
                  and your mouth will not obey.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  People will finish your sentences for you.<br/>
                  Sometimes incorrectly.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will be corrected about your own intentions.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will nod, because correcting them is too tiring.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 2 — The Body Will Fail — Not Heroically
#### 🎯 Purpose
We imagine decline as dramatic — a sudden stroke, a tragic accident. But for most, it's far more insidious. It's the slow erosion of the things we take for granted, starting with the most fundamental: **the ability to speak our own thoughts**.
#### 🎭 Delivery
Read this slowly. Let each line build on the last. The frustration should be palpable — not shouted, but *felt*. The final line about nodding should land like resignation, not anger.
#### 💡 The Horror
This isn't about losing speech entirely. It's about the *gap* between what you think and what you can express. Your mind is still sharp, still *you*, but your body has become a prison. And worse — people will assume your silence means agreement. They'll decide what you meant. They'll correct you about *your own thoughts*.
#### 🌊 The Emotional Arc
This slide introduces a theme that will recur: the slow stripping away of agency. You're not dying yet — you're just becoming less yourself, one small loss at a time.
The next slide goes even more intimate — bodily control.`
        },
        {
          id: 3,
          title: 'Control will leave before life does',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  At some point, your body will release waste without asking you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You won't feel dramatic sorrow.<br/>
                  You'll feel embarrassment, then resignation.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Someone else will clean you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Not once.<br/>
                  Not as an exception.<br/>
                  <strong>As routine.</strong>
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will apologize — even though it is not your fault.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 3 — Control Will Leave Before Life Does
#### 🎯 Purpose
This is perhaps the most viscerally uncomfortable slide. We don't talk about incontinence. We don't talk about being cleaned by strangers. But this is the reality that awaits most of us if we live long enough.
#### 🎭 Delivery
Don't rush past the discomfort. Let it sit. The audience will want to look away — that's the point. Read "As routine" with weight. The final line about apologizing should be almost whispered.
#### 💡 The Stripped Dignity
Notice what happens here: the body betrays you in the most intimate way possible, and your response isn't rage or grief — it's *embarrassment*. You feel shame for something you cannot control. You apologize for existing in a body that is falling apart.
#### 🌊 Why This Matters
This slide isn't cruelty for its own sake. It's about facing what we avoid. Most people plan their finances for retirement but never emotionally prepare for the indignities of physical decline. This forces that reckoning.
Now we move to identity — your face becoming unfamiliar.`
        },
        {
          id: 4,
          title: 'Your face will become unfamiliar',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will look in the mirror and not recognize yourself.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Not metaphorically.<br/>
                  Literally.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your brain will see a stranger wearing your expression.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Sometimes you'll forget you're old.<br/>
                  Then catch your reflection.<br/>
                  And remember.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Each time will feel like the first time.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 4 — Your Face Will Become Unfamiliar
#### 🎯 Purpose
The face is our primary symbol of identity. When we think of ourselves, we picture our face. This slide confronts the strange dissociation that comes with aging — the gap between who we feel we are inside and who looks back at us from mirrors.
#### 🎭 Delivery
The line "Not metaphorically. Literally." should land hard. Pause before it. Let the audience realize you're not being poetic — you're describing a neurological reality. The final line should be delivered with a sense of Groundhog Day horror.
#### 💡 The Uncanny
There's something deeply unsettling about seeing a stranger in your own reflection. It's not that you've forgotten who you are — it's that your internal image of yourself hasn't caught up with decades of change. You still feel thirty inside. Then you see eighty looking back.
#### 🌊 The Cruelty of Remembering
The final line is key: "Each time will feel like the first time." This isn't just about not recognizing yourself once. It's about re-discovering your own aging *repeatedly*, with fresh shock each time. Memory doesn't protect you from this grief.
Next: pain as your constant weather.`
        },
        {
          id: 5,
          title: 'Pain will become your weather',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will wake up with pain.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will plan your day around it.<br/>
                  Calculate how much you can endure.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.9}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will become an expert in types of ache:<br/>
                  Sharp. Dull. Throbbing. Constant. Shooting.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.3}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will rate your pain on scales.<br/>
                  Over and over again.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.7}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  It will bore you before it kills you.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 5 — Pain Will Become Your Weather
#### 🎯 Purpose
We think of pain as an event — something that happens and then passes. But chronic pain is different. It becomes the backdrop of your existence, as constant and unavoidable as weather. This slide captures that exhausting normalization.
#### 🎭 Delivery
The list of pain types (Sharp. Dull. Throbbing. Constant. Shooting.) should be read almost clinically, like someone who has described their pain so many times it's become rote. The final line should be dry, almost darkly funny.
#### 💡 The Vocabulary of Suffering
Notice how the slide mentions "rating pain on scales." Anyone who's been in chronic pain knows this ritual — the 1-to-10 scale, asked by every nurse, every doctor, every time. It becomes meaningless. How do you rate something that never leaves?
#### 🌊 Boredom as Horror
The final line is deliberately jarring: "It will bore you before it kills you." This isn't about pain being less terrible — it's about pain being so constant that even suffering becomes tedious. That's a different kind of horror.
Next: the betrayal of the mind.`
        },
        {
          id: 6,
          title: 'Your mind will betray you quietly',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will forget the word for common things.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will call your children by the wrong names.<br/>
                  Then forget you made the mistake.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will tell the same story three times in one hour.<br/>
                  Each time will feel like the first.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  People will smile patiently.<br/>
                  You won't notice.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  The you that remembers will fade before the you that exists.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 6 — Your Mind Will Betray You Quietly
#### 🎯 Purpose
If losing bodily control is humiliating, losing mental control is existential. This slide captures the quiet horror of cognitive decline — not the dramatic "forgetting who you are" of movies, but the small erosions that accumulate until you're no longer quite yourself.
#### 🎭 Delivery
Read this with a sense of creeping dread. The details are mundane — wrong names, repeated stories — but let their accumulation feel sinister. The final line should land like a philosophical gut-punch.
#### 💡 The Disappearing Self
"The you that remembers will fade before the you that exists." This is the cruelest paradox of dementia: you will still be alive, still present, still breathing — but the continuous thread of memory that makes you *you* will have snapped. You will exist without knowing who you are.
#### 🌊 The Complicity of Others
Notice the detail about people smiling patiently. This is the world around you already treating you as diminished, already accommodating your decline, while you remain unaware. You're the last to know you're fading.
The final slide in this section: becoming a burden.`
        },
        {
          id: 7,
          title: 'You will become a burden',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will need help getting dressed.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will see the flicker of frustration in their eyes.<br/>
                  The forced smile.<br/>
                  The controlled patience.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will hear them sigh when they think you can't hear.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will apologize for existing.<br/>
                  For needing.<br/>
                  For still being here.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And you will mean it.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 7 — You Will Become a Burden
#### 🎯 Purpose
This is the slide people fear most — not death itself, but being a burden on those they love. It captures the shame of dependence, the guilt of needing, and the terrible awareness of being too much for others.
#### 🎭 Delivery
Read the details about seeing frustration, forced smiles, controlled patience — these should feel like observations, not accusations. The person experiencing this isn't angry at their caretakers. They understand. That's what makes it worse.
#### 💡 The Unbearable Awareness
"You will apologize for existing." This is perhaps the most devastating line in this section. Not apologizing for a specific inconvenience — apologizing for *being*. For taking up space. For having needs. For not having the decency to die faster.
#### 🌊 The Final Cut
"And you will mean it." This isn't performed guilt. It's genuine. You will genuinely wish you weren't a burden. You will genuinely feel that your existence is an imposition. And there's no comfortable resolution to that feeling.
> Let this section end in silence. The next section will shift to physical decay.`
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
          content: (
            <GSAPAnimated animation="fadeIn" duration={2} delay={0.5}>
              <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                This decay will claim me.<br/>
                Not in fantasy.<br/>
                Not eventually.<br/>
                To these bones and flesh.
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 8 — Section Opening: Physical Decay
#### 🎯 Purpose
This is a section transition. We move from the failures of agency and mind to the explicit physical breakdown of the body. The language shifts from the abstract to the visceral — bones and flesh, not self and identity.
#### 🎭 Delivery
Same pacing as the first section opener. Slow. Heavy. Let each line land. This is a reset — the audience has absorbed one form of horror, and now we're introducing another.
#### 💡 The Shift in Focus
The previous section was about *experience* — what it feels like to decline. This section is about *mechanics* — what literally happens to your body. It's more clinical, more graphic, more unavoidable.
#### 🌊 Setting the Stage
The slides that follow will go through organ systems, tissues, and structures. Skin. Bones. Heart. Eyes. Teeth. Each one failing in its own way. Prepare the audience for specificity.
The body itself becomes the subject now.`
        },
        {
          id: 9,
          title: 'Your skin will paper and tear',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your skin will become thin as tissue paper.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  A simple bump will tear it open.<br/>
                  Blood will seep through bandages.<br/>
                  Wounds will refuse to heal.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your hands will show every vein.<br/>
                  Purple and blue like a roadmap of decay.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will pull at the loose skin on your hands.<br/>
                  It will stay where you left it.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Taking minutes to slowly fall back.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 9 — Your Skin Will Paper and Tear
#### 🎯 Purpose
Skin is our boundary with the world. It's what holds us together, literally. This slide describes how that boundary becomes fragile — how the container itself starts to fail.
#### 🎭 Delivery
The visceral details here — blood seeping through bandages, wounds refusing to heal — should be read matter-of-factly. This isn't dramatic description; it's clinical reality. The "roadmap of decay" line can have a hint of dark poetry.
#### 💡 The Test
The detail about pulling at loose skin is something anyone can try right now. Pinch the skin on the back of your hand and release it. At twenty, it snaps back instantly. At eighty, it stays. You can watch your own collagen disappearing in real-time.
#### 🌊 Visible Decay
Unlike internal organ failure, skin deterioration is *visible*. You see it every day. Every glance at your hands reminds you that you're decomposing slowly, while still alive.
Next: the skeleton itself.`
        },
        {
          id: 10,
          title: 'Your bones will hollow and crack',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your bones will become brittle, porous, light.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will break a rib from coughing.<br/>
                  A hip from standing.<br/>
                  A vertebra from sitting wrong.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Each fracture will heal slower than the last.<br/>
                  If it heals at all.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will shrink.<br/>
                  Your spine will curve.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  The body you stand in will collapse inward.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 10 — Your Bones Will Hollow and Crack
#### 🎯 Purpose
We think of bones as permanent — the skeleton as the lasting frame. But bones are alive, constantly rebuilding themselves. When that process fails, you become fragile in ways that seem absurd: breaking bones from ordinary movements.
#### 🎭 Delivery
The list of ordinary activities causing fractures (coughing, standing, sitting) should feel increasingly absurd and horrifying. These aren't accidents — they're just *existing*.
#### 💡 Osteoporosis
This is the reality of severe osteoporosis. The bones become like honeycomb — full of air, structurally compromised. A compression fracture from sitting in a chair. A rib breaking from a cough. These aren't exaggerations.
#### 🌊 Collapsing Inward
"The body you stand in will collapse inward." This captures both the literal reality (spinal compression, shrinking height) and the metaphorical sense of the self caving in on itself. You become smaller. Less.
The heart comes next.`
        },
        {
          id: 11,
          title: 'Your heart will strain and stutter',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your heart will work harder to accomplish less.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will feel it skip beats.<br/>
                  Race for no reason.<br/>
                  Pause for too long.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Walking to the bathroom will exhaust you.<br/>
                  You will need to sit down halfway.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will count your breaths.<br/>
                  Wonder which one will be the last.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Then be disappointed it wasn't.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 11 — Your Heart Will Strain and Stutter
#### 🎯 Purpose
The heart is the engine. When it fails, everything fails. This slide captures the experience of cardiac decline — not the dramatic heart attack, but the slow weakening that turns every movement into a calculation of energy.
#### 🎭 Delivery
The sequence of symptoms (skipping, racing, pausing) should feel irregular, like the heart itself. The detail about needing to rest halfway to the bathroom should be delivered with exhaustion in your voice. The final line should shock.
#### 💡 The Arithmetic of Energy
When your heart can't pump efficiently, you start rationing energy. Is this trip to the kitchen worth the exhaustion? Can I make it to the bathroom without stopping? Every action requires calculation.
#### 🌊 The Dark Turn
"Then be disappointed it wasn't." This is the slide where we first acknowledge that death might be preferable to continued existence. This isn't suicidal ideation — it's the exhausted recognition that continued life in this state is its own form of suffering.
Organ failure cascade next.`
        },
        {
          id: 12,
          title: 'Your organs will fail in sequence',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your kidneys will filter less.<br/>
                  Your liver will process slower.<br/>
                  Your lungs will capture less oxygen.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Toxins will build up in your blood.<br/>
                  You will taste metal.<br/>
                  Your breath will smell like decay.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.2}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your body will retain fluid.<br/>
                  Your ankles will swell.<br/>
                  Your belly will distend.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.7}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will look pregnant with your own death.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 12 — Your Organs Will Fail in Sequence
#### 🎯 Purpose
Organ failure is rarely sudden. It's a cascade — one system stressing another, toxins accumulating, the body slowly poisoning itself. This slide makes that process viscerally real through sensory details.
#### 🎭 Delivery
The list of failing organs should feel like dominoes falling. The sensory details — tasting metal, smelling decay — should be delivered as facts, not dramatizations. The final image is meant to be grotesque.
#### 💡 The Body Betraying Itself
When kidneys fail, waste builds up. When lungs fail, oxygen drops. When the liver fails, toxins accumulate. Your body becomes a hostile environment for itself. You can literally taste your own decline.
#### 🌊 The Final Image
"Pregnant with your own death" — this image is deliberately disturbing. The swelling, the distension, the body filling with what it cannot process. You are carrying something that will kill you, watching it grow.
Muscles next.`
        },
        {
          id: 13,
          title: 'Your muscles will waste and atrophy',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your muscles will consume themselves for fuel.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your arms will thin until bone shows through.<br/>
                  Your legs will barely hold you.<br/>
                  Your hands will shake from the effort of holding a cup.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will drop things.<br/>
                  Spill things.<br/>
                  Break things.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  People will start cutting your food for you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Then feeding you.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 13 — Your Muscles Will Waste and Atrophy
#### 🎯 Purpose
Muscles are action. They're how we interact with the world, how we do things. Losing them means losing the ability to *do* — reduced first to clumsiness, then to helplessness, then to being fed like an infant.
#### 🎭 Delivery
The progression here is a descent: from weakness to trembling to dropping things to having food cut for you to being fed. Read each step as a further humiliation. The final two lines should feel like a one-two punch.
#### 💡 Sarcopenia
This is called sarcopenia — age-related muscle loss. Your body, unable to maintain muscle, starts cannibalizing it. You literally eat yourself from the inside. And unlike fat, muscle is hard to rebuild in old age.
#### 🌊 The Return to Infancy
The final lines echo childhood: having food cut, being fed. You end as you began — dependent, helpless, unable to care for yourself. But unlike childhood, there's no growth ahead. Only decline.
Eyes next — losing the world.`
        },
        {
          id: 14,
          title: 'Your eyes will fail you',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your world will become blurry, then dark.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Colors will fade to gray.<br/>
                  Faces will become shadows.<br/>
                  You will see halos around lights.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will reach for things that aren't there.<br/>
                  Miss things that are.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Reading will become impossible.<br/>
                  Then recognizing faces.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Then light itself will go.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 14 — Your Eyes Will Fail You
#### 🎯 Purpose
Vision is how most of us primarily experience the world. Losing it means losing access to everything — reading, faces, beauty, danger. This slide traces that loss from blur to darkness.
#### 🎭 Delivery
The progression should feel like the world slowly dimming. Read it like a sunset that never reverses. The final line — "Then light itself will go" — should feel like a door closing.
#### 💡 The Layered Loss
Notice the sequence: first clarity, then color, then detail, then shape, then light. Each stage takes something irreplaceable. You lose books. You lose the faces of people you love. You lose the ability to navigate your own home.
#### 🌊 The Metaphor Within
Vision loss is also a metaphor for how decline works: gradual, then sudden. You adjust to blurriness, then to dimness, then suddenly you realize you can't see at all. The adjustment obscures the cliff until you've fallen.
Finally: teeth.`
        },
        {
          id: 15,
          title: 'Your teeth will loosen and fall',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your gums will recede and bleed.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your teeth will wiggle when you touch them.<br/>
                  Then fall out one by one.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will find them in your food.<br/>
                  On your pillow.<br/>
                  In your hand after coughing.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your face will collapse inward.<br/>
                  Your words will slur.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will smile and look like a corpse.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 15 — Your Teeth Will Loosen and Fall
#### 🎯 Purpose
Teeth are bone visible. They're also central to our appearance, our smile, our ability to eat. Losing them is both functionally debilitating and symbolically devastating — you start to look like the corpse you will become.
#### 🎭 Delivery
The image of finding teeth in food, on pillows, in your hand — these should feel both mundane and horrifying. The final line about smiling like a corpse should land as a dark mirror.
#### 💡 The Physical Reality
Without teeth, the face collapses. The jaw shrinks. The lips fold inward. The structural support of the lower face disappears. This isn't just cosmetic — it affects eating, speaking, breathing.
#### 🌊 The Corpse in the Mirror
"You will smile and look like a corpse." This is perhaps the most brutal image in this section. You're still alive, but your face has begun to preview what death will look like. Every smile is a reminder.
> End of physical decay section. Transition to isolation.`
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
          content: (
            <GSAPAnimated animation="fadeIn" duration={2} delay={0.5}>
              <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                This isolation will hollow me.<br/>
                Not as metaphor.<br/>
                Not as possibility.<br/>
                In lived experience.
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 16 — Section Opening: Isolation
#### 🎯 Purpose
We shift from physical decay to social decay. The body fails, yes — but so does your world. People leave. People die. The circles of connection that gave life meaning shrink until you're alone.
#### 🎭 Delivery
Same slow pace as previous openers. Let "In lived experience" land hard. This isn't philosophical loneliness — it's the concrete reality of isolation that most elderly people face.
#### 💡 The Other Death
We focus on physical death, but there's another death that precedes it: social death. The death of connection. The death of relevance. The death of being seen and known by others.
#### 🌊 What's Coming
The slides ahead will cover: outliving everyone, decreasing visits, talking to yourself, being forgotten, becoming invisible, sleeping alone. Each is a different face of isolation.
This section may hit harder than physical decay. Bodies fail — we know this. But being abandoned? That cuts deeper.`
        },
        {
          id: 17,
          title: 'You will outlive everyone you love',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will attend funeral after funeral.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your friends will die.<br/>
                  Your siblings will die.<br/>
                  If you're unlucky enough — your children will die.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Each death will take a piece of your history.<br/>
                  Stories only you two shared.<br/>
                  Jokes no one else will understand.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will become the sole keeper of memories.<br/>
                  Then you will forget them too.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And no one will be left to remind you.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 17 — You Will Outlive Everyone You Love
#### 🎯 Purpose
Longevity has a cost: you get to watch everyone you love die before you. Each death takes not just a person but a piece of shared history — inside jokes, memories, the validation that your past was real.
#### 🎭 Delivery
The list — friends, siblings, children — should feel like a toll. The phrase "If you're unlucky enough" before "your children" should land as the worst of the losses. The final lines should feel like an echo in an empty room.
#### 💡 The Archaeology of Loss
When someone dies, the shared memories go with them. You become the only person who remembers that summer, that conversation, that look. You're the last witness. And when your memory fails, those moments will cease to have ever existed.
#### 🌊 The Compounding Grief
This isn't one funeral. It's funeral after funeral. The grief accumulates. Eventually, you stop being surprised. Death becomes routine. That normalization is its own kind of horror.
Visits will decrease next.`
        },
        {
          id: 18,
          title: 'People will visit less and less',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  At first, they will visit often.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Then once a week.<br/>
                  Then once a month.<br/>
                  Then on holidays only.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will understand.<br/>
                  They have lives.<br/>
                  Responsibilities.<br/>
                  You are not the center anymore.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will wait by the phone for calls that don't come.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And you will not blame them. But you will notice.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 18 — People Will Visit Less and Less
#### 🎯 Purpose
Even before everyone dies, they drift away. Life pulls them. You're no longer central to anyone's story. The visits decrease with mathematical certainty, and you watch yourself become an obligation rather than a priority.
#### 🎭 Delivery
The countdown — weekly to monthly to holidays — should feel like a countdown to zero. "You are not the center anymore" should be matter-of-fact, not self-pitying. The final line should have dignity despite its sadness.
#### 💡 The Calculus of Obligation
People don't stop caring. They stop having time. Their lives are full. You become an item on a checklist, squeezed between other obligations. They love you, but love doesn't guarantee presence.
#### 🌊 The Grace of Understanding
"You will not blame them. But you will notice." This is the terrible maturity of old age — understanding why people don't come, not resenting them for it, but still feeling every absence. Understanding doesn't fill the silence.
Self-dialogue comes next.`
        },
        {
          id: 19,
          title: 'You will talk to yourself',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Days will pass without another voice.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will narrate your actions to the empty room.<br/>
                  "Now I'll make tea."<br/>
                  "Time for lunch."<br/>
                  "Where did I put that?"
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will answer yourself.<br/>
                  Have full conversations alone.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will forget what your voice sounds like to others.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Because there are no others.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 19 — You Will Talk to Yourself
#### 🎯 Purpose
When no one else is there, you become your own company. Self-narration begins as a way to fill silence and becomes the only conversation you have. This slide captures the mundane reality of extreme isolation.
#### 🎭 Delivery
The quoted self-talk should be delivered naturally, like you're actually making tea. Let the phrases hang in the silence. "Because there are no others" should land like a door closing.
#### 💡 The Sound of Your Own Voice
Most people have never gone days without hearing another human voice. But for the isolated elderly, this is reality. You talk to yourself not because you're crazy but because silence becomes unbearable.
#### 🌊 The Mirror's Absence
"You will forget what your voice sounds like to others." Your voice exists only in your own head now. There's no one to respond, no one to mirror you, no one to confirm you're real. You become a ghost haunting your own home.
Being forgotten is next.`
        },
        {
          id: 20,
          title: 'The world will forget you exist',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your emails will go unanswered.<br/>
                  Your calls unreturned.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your opinions will be dismissed as outdated.<br/>
                  Your stories as repetitive.<br/>
                  Your presence as optional.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will realize you could die tomorrow<br/>
                  and most people wouldn't know<br/>
                  for weeks.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Or months.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And life would continue exactly as it does now.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 20 — The World Will Forget You Exist
#### 🎯 Purpose
Before you die, you become irrelevant. Your voice no longer carries weight. Your presence is unnoticed. This slide confronts the social death that often precedes physical death — the realization that you no longer matter.
#### 🎭 Delivery
Read the dismissals (outdated, repetitive, optional) without bitterness — just acceptance. The realization about dying and no one noticing should land like a stone dropped into water. "Or months" should be even heavier.
#### 💡 The Test of Impact
How would the world change if you disappeared? This is a brutal question, but honest. For most of us, especially in old age, the answer is: minimally. Life flows around our absence without noticing.
#### 🌊 The Continuation
"Life would continue exactly as it does now." This is the hardest truth: the world doesn't need you. Never did. Your absence creates a ripple, not a wave. And ripples fade.
Invisibility comes next.`
        },
        {
          id: 21,
          title: 'You will become invisible',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  People will look through you in public.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Waiters will serve you last.<br/>
                  Store clerks will ignore you.<br/>
                  Young people will talk over you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will stand in line and be skipped.<br/>
                  You will raise your hand and not be called on.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will speak and people will not hear you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will wonder if you've already died and no one told you.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 21 — You Will Become Invisible
#### 🎯 Purpose
Old people become invisible in public spaces. They're looked through, talked over, served last. This slide captures the experience of still being present but no longer being seen — a kind of living erasure.
#### 🎭 Delivery
The list of small indignities should accumulate. None is dramatic, but together they paint a picture of constant dismissal. The final question should hang in the air, genuinely uncertain.
#### 💡 The Vanishing
This isn't paranoia. Studies show that elderly people receive less attention, less service, less acknowledgment in public spaces. Youth-oriented cultures simply stop seeing people past a certain age.
#### 🌊 The Existential Question
"You will wonder if you've already died and no one told you." This is played as absurdist, but it touches on something real: when no one responds to you, when no one sees you, what proof do you have that you exist?
Sleeping alone is next — the final isolation.`
        },
        {
          id: 22,
          title: 'You will sleep alone',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  The bed will be too big.<br/>
                  Too cold.<br/>
                  Too quiet.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will reach out in the night<br/>
                  for someone who isn't there.<br/>
                  Who hasn't been there for years.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will wake up and forget they're gone.<br/>
                  Then remember.<br/>
                  Every single morning.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will talk to their photo.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  It will not answer.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 22 — You Will Sleep Alone
#### 🎯 Purpose
Of all isolation, this may be the most intimate: the empty bed. The person you shared decades with, gone. And every morning, you wake up and have to remember they're dead all over again.
#### 🎭 Delivery
The short sentences at the start (too big, too cold, too quiet) should feel sparse, like the bed itself. The reaching out in the night should feel like a reflex. "Every single morning" should carry the weight of thousands of mornings.
#### 💡 The Cruelty of Sleep
Sleep resets memory. Every night, your dreaming brain forgets the loss. Every morning, you wake expecting them to be there, reach out, and re-experience the absence. It's grief on infinite loop.
#### 🌊 The One-Sided Conversation
"It will not answer." The photo becomes a companion. You tell it about your day, ask its advice, say goodnight. But there's no response. Just your voice and the silence it falls into.
> End of isolation section. Transition to fear.`
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
          content: (
            <GSAPAnimated animation="fadeIn" duration={2} delay={0.5}>
              <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                This terror will find me.<br/>
                Not in nightmares.<br/>
                Not theoretically.<br/>
                In the darkness at 3 AM.
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 23 — Section Opening: Fear
#### 🎯 Purpose
Aging brings specific fears: falling, dying alone, hospitals, forgetting, being a burden, pain. This section catalogs them — not to frighten, but to name what most people feel but rarely say.
#### 🎭 Delivery
"In the darkness at 3 AM" — this is when fear is loudest. When you can't sleep and the thoughts spiral. Let this feel like that hour: quiet, dark, unavoidable.
#### 💡 Why Fear Matters
We talk about death philosophically, but the *experience* of approaching death is dominated by fear. These aren't abstract concerns — they're the things that wake people at night, that they don't admit to their families.
#### 🌊 What's Coming
Falling. Dying alone. Hospitals. Forgetting. Being a burden. Pain. Each fear has its own slide. Each is valid. Each is terrifying.
Let's begin with falling — the fear that starts the cascade.`
        },
        {
          id: 24,
          title: 'You will be afraid of falling',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Every step will be a calculation.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will grip railings with white knuckles.<br/>
                  Look down at your feet constantly.<br/>
                  Shuffle instead of walk.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will refuse invitations because of stairs.<br/>
                  Avoid wet floors.<br/>
                  Panic at uneven pavement.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will know that one fall could be the last.<br/>
                  A broken hip means bedridden.<br/>
                  Bedridden means pneumonia.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Pneumonia means death.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 24 — You Will Be Afraid of Falling
#### 🎯 Purpose
For the elderly, falling is not a minor accident — it's potentially a death sentence. This slide captures the constant vigilance, the life-limiting fear, and the domino logic of decline.
#### 🎭 Delivery
Read the physical behaviors (gripping, shuffling, looking down) as someone describing their own habits. The cascade at the end — hip to bedridden to pneumonia to death — should feel inevitable.
#### 💡 The Fall Cascade
This is medically accurate. Hip fractures in the elderly have a one-year mortality rate of 20-30%. Immobilization leads to pneumonia, blood clots, muscle wasting. A fall doesn't kill you directly — it starts a chain reaction.
#### 🌊 Life Narrowing
Fear of falling shrinks your life. You stop going out. Stop climbing stairs. Stop visiting places. Your world contracts to the few safe paths you've memorized. Freedom is traded for survival.
Next: dying alone.`
        },
        {
          id: 25,
          title: 'You will be afraid of being alone when it happens',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will imagine the scenarios.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Falling in the bathroom and not being found.<br/>
                  Choking with no one to help.<br/>
                  The heart attack in the middle of the night.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will keep your phone charged at all times.<br/>
                  Within reach.<br/>
                  But wonder if you'll be able to dial.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will see the news stories.<br/>
                  Elderly person found dead after three days.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will know that could be you.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 25 — You Will Be Afraid of Being Alone When It Happens
#### 🎯 Purpose
The fear isn't just death — it's dying alone and undiscovered. The bathroom fall no one finds. The choking with no one to call 911. The slow death that goes unwitnessed.
#### 🎭 Delivery
The scenarios should feel like intrusive thoughts — the kind that come at 3 AM. The detail about the phone being charged but wondering if you can dial captures the helplessness.
#### 💡 The News Stories
"Elderly person found dead after three days" — these stories appear regularly in local news. They represent a specific terror: not just dying, but dying without anyone noticing, decomposing before anyone thinks to check.
#### 🌊 The Inadequacy of Technology
The phone is supposed to be the lifeline. But what if you can't reach it? Can't unlock it? Can't speak clearly? Technology promises safety but can't actually guarantee it.
Hospitals next.`
        },
        {
          id: 26,
          title: 'You will be afraid of hospitals',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will know that going in doesn't mean coming out.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will resist calling the ambulance.<br/>
                  Downplay symptoms.<br/>
                  "I'll be fine."
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Because you've seen too many people<br/>
                  go in for something simple<br/>
                  and never come home.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will pack a bag "just in case."<br/>
                  Leave notes for what to do if—
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You can't finish writing that sentence.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 26 — You Will Be Afraid of Hospitals
#### 🎯 Purpose
Hospitals are supposed to heal, but for the elderly, they're often where you go to die. This fear leads to dangerous behavior — downplaying symptoms, avoiding care — because the hospital represents a point of no return.
#### 🎭 Delivery
"I'll be fine" should sound like denial covering fear. The trailing off — "Leave notes for what to do if—" — should feel like someone who can't complete the thought. The final line names the avoidance.
#### 💡 The Hospital as Terminus
For elderly patients, hospitalization often accelerates decline. Hospital-acquired infections. Delirium from unfamiliar environments. The cascade of interventions that each bring their own risks.
#### 🌊 The Packed Bag
The detail about packing "just in case" is heartbreaking — the preparation for a one-way trip. The notes left behind. The affairs put in order. Every hospital visit treated as potentially final.
Fear of forgetting next.`
        },
        {
          id: 27,
          title: 'You will be afraid of forgetting',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Every memory lapse will terrify you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Was that normal?<br/>
                  Or is it starting?
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will test yourself constantly.<br/>
                  What day is it?<br/>
                  What did I eat for breakfast?<br/>
                  What's my daughter's name?
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will fear becoming a stranger to yourself.<br/>
                  Losing your memories.<br/>
                  Your personality.<br/>
                  Your self.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And still being alive when it's all gone.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 27 — You Will Be Afraid of Forgetting
#### 🎯 Purpose
Dementia is perhaps the most terrifying fate — worse than death for many people. Losing yourself while your body continues. This slide captures the hypervigilance of those who fear it, constantly testing themselves.
#### 🎭 Delivery
The self-tests (What day? What did I eat? What's my daughter's name?) should feel like anxious rituals. The final line should land as the worst outcome — not death, but surviving the loss of self.
#### 💡 The Monitoring
Every forgotten word becomes a sign. Every misplaced key becomes evidence. The fear of dementia creates constant self-surveillance, where normal lapses become terrifying portents.
#### 🌊 Worse Than Death
"And still being alive when it's all gone." Many people say they'd prefer death to advanced dementia. The self — the memories, the personality, the continuous thread of identity — is what makes life worth living. Losing it while the body persists is a unique horror.
Fear of being a burden next.`
        },
        {
          id: 28,
          title: 'You will be afraid of being a burden',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  This fear will consume you more than death itself.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will hide how much you're struggling.<br/>
                  Pretend you can manage.<br/>
                  Refuse help until you absolutely can't.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will calculate the cost of your care.<br/>
                  Your children's inheritance disappearing.<br/>
                  Their lives on hold for you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will think about how much easier it would be<br/>
                  for everyone<br/>
                  if you just—
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will think it often.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 28 — You Will Be Afraid of Being a Burden
#### 🎯 Purpose
This fear often exceeds fear of death itself. Being a burden means watching your existence cost others — money, time, freedom, youth. This slide captures that calculus and where it leads.
#### 🎭 Delivery
Read the hiding, pretending, refusing help as protective mechanisms born of shame. The unfinished sentence — "if you just—" — should trail off. Everyone knows how it ends. You don't need to say it.
#### 💡 The Dark Thought
The unspoken conclusion: "if you just died." This thought isn't suicidal ideation in the clinical sense. It's the logical endpoint of burden calculation. If your existence costs others, your non-existence would be a gift.
#### 🌊 The Frequency
"You will think it often." Not once. Not in a crisis. Regularly. The thought becomes a companion, checking in, asking if today is the day you became too much.
Fear of pain is last.`
        },
        {
          id: 29,
          title: 'You will be afraid it will hurt',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will wonder which kind of death awaits you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Slow and painful?<br/>
                  Fast but terrifying?<br/>
                  Peaceful but lonely?
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will pray for quick.<br/>
                  Hope for painless.<br/>
                  Fear neither will come.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will have watched others die.<br/>
                  Seen the morphine drip.<br/>
                  Heard the gasping.<br/>
                  Witnessed the fear in their eyes.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And you will know those eyes will be yours.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 29 — You Will Be Afraid It Will Hurt
#### 🎯 Purpose
We don't just fear death — we fear the process. Will it hurt? Will it be slow? Will we be alone? This slide confronts the specific terror of how we will die, informed by watching others go before us.
#### 🎭 Delivery
The three options (slow/painful, fast/terrifying, peaceful/lonely) should feel like a terrible menu with no good choices. The memories of others dying should be vivid but not graphic. The final line should land as identification.
#### 💡 Witnessing Death
Most elderly people have watched others die. They know what it looks like. They've seen the morphine-glazed eyes, heard the labored breathing, watched consciousness fade. They know what awaits.
#### 🌊 The Mirror
"And you will know those eyes will be yours." This is the cruelest knowledge — not just that you will die, but that you've already seen a preview. The fear in their eyes will become the fear in yours.
> End of fear section. Transition to pain.`
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
          content: (
            <GSAPAnimated animation="fadeIn" duration={2} delay={0.5}>
              <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                This pain will consume me.<br/>
                Not hypothetically.<br/>
                Not far off.<br/>
                In this suffering vessel.
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 30 — Section Opening: Pain
#### 🎯 Purpose
Pain is the great isolator. No one can feel it for you. No one can fully understand it. This section explores chronic, unrelenting pain — not as an event but as a permanent state of being.
#### 🎭 Delivery
"In this suffering vessel" — the body as container for pain. Let this phrase sit. The body stops being *you* and becomes a thing you're trapped inside of.
#### 💡 The Shift
Previous sections discussed fears *about* suffering. This section is about living *inside* suffering. The difference is immense. Fear is anticipatory. Pain is present.
#### 🌊 What's Coming
Constant pain. Begging for relief. Wishing for death. Isolation in suffering. Normalization. Loss of self. Each slide is another facet of the experience of chronic, terminal pain.`
        },
        {
          id: 31,
          title: 'Pain will become your constant companion',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will wake up in pain.<br/>
                  You will go to sleep in pain.<br/>
                  You will dream of pain.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  There will be no position that brings relief.<br/>
                  No medication that truly works.<br/>
                  No escape.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will forget what it felt like<br/>
                  to simply exist without hurting.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Pain will become your baseline.<br/>
                  Not the exception.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  The norm.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 31 — Pain Will Become Your Constant Companion
#### 🎯 Purpose
Chronic pain rewrites your relationship with your body. It's no longer a tool for living — it's a source of suffering. This slide captures the totalizing nature of pain that never stops.
#### 🎭 Delivery
The repetition (wake up, sleep, dream) should feel like a trap. The negations (no position, no medication, no escape) should close off all exits. "The norm" should land as surrender.
#### 💡 Forgetting Comfort
"You will forget what it felt like to simply exist without hurting." This is one of the cruelest aspects of chronic pain — you lose access even to the memory of comfort. Pain becomes your only reality.
#### 🌊 The New Normal
Pain as baseline, not exception. Your best days aren't pain-free; they're just less pain. You stop asking "when will it stop?" and start asking "how much can I endure today?"
Begging comes next.`
        },
        {
          id: 32,
          title: 'You will beg for it to stop',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  There will be moments when the pain is so intense<br/>
                  you will beg.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  To God.<br/>
                  To nurses.<br/>
                  To anyone who will listen.<br/>
                  To no one.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will say "please" until it loses meaning.<br/>
                  You will cry until there are no tears left.<br/>
                  You will scream until your voice breaks.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  And the pain will continue.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Indifferent to your suffering.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 32 — You Will Beg for It to Stop
#### 🎯 Purpose
There's a level of pain where dignity disappears. You beg — to God, to nurses, to anyone, to no one. This slide captures that breaking point, the place where language fails and only pleading remains.
#### 🎭 Delivery
The list of who you beg to should feel increasingly desperate. "To no one" is the emptiest — begging the universe, begging the pain itself. The final line should feel like stone.
#### 💡 The Indifference
"Indifferent to your suffering." Pain has no ears. It doesn't respond to negotiation. It doesn't care how much you beg. This is perhaps the cruelest aspect — suffering is not a dialogue.
#### 🌊 The Breaking Point
At some point, the person you were before pain disappears. You become only the pain and the plea for it to stop. This is not weakness — it's what happens when suffering exceeds human capacity.
Wishing for death next.`
        },
        {
          id: 33,
          title: 'You will wish for death',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  There will come a point when death seems merciful.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  When another day feels like a sentence.<br/>
                  When morning light brings dread, not hope.<br/>
                  When "getting better" sounds like a cruel joke.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will understand why people give up.<br/>
                  Not from weakness.<br/>
                  But from exhaustion.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  The will to live is not infinite.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Pain will erode it.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 33 — You Will Wish for Death
#### 🎯 Purpose
This isn't about suicidal ideation in the traditional sense. It's about the rational recognition that when suffering is unbearable and unending, death becomes not a tragedy but a mercy.
#### 🎭 Delivery
"Another day feels like a sentence" — let this double meaning land. A prison sentence. "Getting better sounds like a cruel joke" — read this with the weariness of someone who's heard false hope too many times.
#### 💡 Understanding, Not Judging
"Not from weakness. But from exhaustion." This reframes "giving up" not as moral failure but as the natural result of finite human endurance meeting infinite suffering.
#### 🌊 The Finite Will
"The will to live is not infinite." We romanticize the life force, the survival instinct. But it can be worn down. Pain is patient. Pain wins eventually. Understanding this is not defeatism — it's honesty.
Isolation in pain next.`
        },
        {
          id: 34,
          title: 'No one can feel it for you',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  People will say they understand.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  They don't.<br/>
                  They can't.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  They will see your face contort.<br/>
                  Hear you moan.<br/>
                  Watch you suffer.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  But they will never feel what you feel.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You are alone in your pain.<br/>
                  Trapped in a body that only you inhabit.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={2.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  No one can take it from you. No one can share it.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 34 — No One Can Feel It for You
#### 🎯 Purpose
Pain is the ultimate solitary experience. No matter how much people care, they cannot feel what you feel. This slide confronts the fundamental isolation of suffering.
#### 🎭 Delivery
"They don't. They can't." — These should be matter-of-fact, not bitter. It's not a failing of empathy; it's a limitation of existence. "Trapped in a body that only you inhabit" — this is both literal and philosophical.
#### 💡 The Island of Suffering
You can show signs of pain. You can describe it. But no one else has access to the actual sensation. Your nervous system is a locked room. Others can only see through the keyhole.
#### 🌊 The Loneliest Truth
"No one can take it from you. No one can share it." This is both the horror and, strangely, the dignity of suffering. It is yours alone. Utterly, irrevocably yours.
Normalization of suffering next.`
        },
        {
          id: 35,
          title: 'Your suffering will be normalized',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  At first, people will be alarmed by your pain.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  They will rush to help.<br/>
                  Adjust pillows.<br/>
                  Call doctors.<br/>
                  Hold your hand.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  But pain that doesn't end becomes background noise.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  They will grow tired.<br/>
                  Distracted.<br/>
                  Resigned.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Your agony will become routine.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 35 — Your Suffering Will Be Normalized
#### 🎯 Purpose
Compassion fatigue is real. The people who care about you will grow tired. Not because they don't love you, but because sustained crisis is exhausting for everyone. Your extraordinary pain becomes ordinary.
#### 🎭 Delivery
Show the arc: the initial rush of concern, then the slow retreat. "Background noise" should feel almost clinical. "Your agony will become routine" — this is the terrible adaptation, for everyone.
#### 💡 The Economics of Care
There's a finite supply of attention and energy, even in love. People have their own lives, their own problems. Eventually, your suffering gets filed away, checked in on but not felt.
#### 🌊 Becoming Invisible
"Your agony will become routine." This is one of the loneliest realizations — that your ongoing catastrophe has become mundane to others. They've adjusted to your suffering. You haven't.
Loss of self to pain next.`
        },
        {
          id: 36,
          title: 'You will lose yourself to pain',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Pain will take your personality.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will become irritable.<br/>
                  Demanding.<br/>
                  Bitter.<br/>
                  Angry.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will snap at people who love you.<br/>
                  Push them away.<br/>
                  Hate yourself for it.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  But you won't be able to stop.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Pain leaves no room for grace.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 36 — You Will Lose Yourself to Pain
#### 🎯 Purpose
Chronic pain changes who you are. It strips away patience, humor, kindness. The person you spent a lifetime building gets eroded by suffering, and you watch it happen, helpless.
#### 🎭 Delivery
The list of negative traits should feel like an indictment — not of the person, but of what pain does. "Hate yourself for it" carries the cruel irony: you know you're being impossible, but you can't stop.
#### 💡 The Cruelty of Self-Awareness
This isn't about losing awareness — it's about being fully aware while being unable to change. Watching yourself become someone you don't recognize, someone you'd never choose to be.
#### 🌊 No Room for Grace
"Pain leaves no room for grace." When every nerve is screaming, there's nothing left for politeness, patience, or kindness. Pain is greedy — it takes everything.
Regret section begins next.`
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
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                  This regret will haunt me.<br/>
                  Not as warning.<br/>
                  Not as lesson.<br/>
                  As lived truth.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 37 — Regret: Section Opening
#### 🎯 Purpose
We enter the sixth confrontation — regret. Not hypothetical regret, not cautionary tales, but the visceral experience of looking back at a life and knowing it's too late to change anything.
#### 🎭 Delivery
"As lived truth" distinguishes this from platitudes. These aren't fortune-cookie warnings about seizing the day. This is standing at the end with a clear view of everything you didn't do.
#### 💡 The Weight of "Lived"
Abstract regret is manageable. "I wish I had traveled more" said at 30 is different from saying it at 80 when traveling is impossible. Lived regret has no escape clause.
#### 🌊 Transition
Pain section complete. Now we confront the inventory of unlived life.
What you didn't do comes next.`
        },
        {
          id: 38,
          title: 'You will remember what you didn\'t do',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  The trip you postponed.<br/>
                  The book you never wrote.<br/>
                  The words you never said.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  "There's always tomorrow."<br/>
                  Except there isn't.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will lie in bed cataloging missed opportunities.<br/>
                  Doors you walked past.<br/>
                  Chances you were too afraid to take.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  And you will know, with terrible clarity:
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  It's too late now.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 38 — You Will Remember What You Didn't Do
#### 🎯 Purpose
Deathbed regret is dominated not by what we did wrong, but by what we didn't do at all. The unlived life. The postponed dreams. This slide forces confrontation with postponement.
#### 🎭 Delivery
Make the list feel personal — these are universal regrets. "There's always tomorrow. Except there isn't." — let the reversal land with finality. "Terrible clarity" is the curse of dying: you finally see everything clearly when you can no longer act.
#### 💡 The Cruelty of Clarity
Why do we only gain perspective at the end? When all the noise of daily life fades, what remains is the clear view of what mattered and what we neglected. This clarity would have been useful earlier. It arrives too late.
#### 🌊 The Catalog
"Cataloging missed opportunities" — at night, in the darkness, the mind becomes an accountant of regret, tallying every postponed dream.
Relationships regret next.`
        },
        {
          id: 39,
          title: 'You will remember who you hurt',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  The cruel words you said in anger.<br/>
                  The trust you betrayed.<br/>
                  The love you took for granted.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Their faces will come to you at night.<br/>
                  The look in their eyes when you wounded them.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Some you can no longer apologize to.<br/>
                  They're already gone.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Others wouldn't accept your apology anyway.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will carry this to the grave.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 39 — You Will Remember Who You Hurt
#### 🎯 Purpose
Beyond inaction lies the weight of harmful action. The people you wounded. This isn't about guilt as punishment but as the simple cost of being human — we all hurt people, and we will remember.
#### 🎭 Delivery
"Their faces will come to you at night" — this is visceral. We don't remember abstractions; we remember expressions, tones, the moment of impact. Pause on "They're already gone." Some debts cannot be paid.
#### 💡 The Impossibility of Repair
"Some you can no longer apologize to." Death closes accounts. "Others wouldn't accept your apology anyway." Some wounds don't heal, regardless of remorse. Both paths lead to carrying the weight.
#### 🌊 The Permanent Record
"You will carry this to the grave." These aren't metaphorical burdens. They're the faces that visit at 3am, the memories that ambush you in quiet moments.
Unlived life next.`
        },
        {
          id: 40,
          title: 'You will mourn the life you didn\'t live',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  There was another version of you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  The one who took that risk.<br/>
                  Who said yes instead of no.<br/>
                  Who didn't let fear decide.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  That person had a different life.<br/>
                  Different loves.<br/>
                  Different endings.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will never know what could have been.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Only that it wasn't.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 40 — You Will Mourn the Life You Didn't Live
#### 🎯 Purpose
We don't live one life — we live one while abandoning countless others. Every choice eliminates alternatives. Near the end, the ghost of the unchosen life becomes painfully visible.
#### 🎭 Delivery
"There was another version of you" — speak to that phantom self. The branching paths are real: "Different loves. Different endings." Let "Only that it wasn't" land as the final verdict.
#### 💡 The Road Not Taken
This isn't about wrong choices — many choices were reasonable. It's about the mathematics of finitude. You can't live every life. You chose one path. The others died. You mourn them.
#### 🌊 The Ghost Life
Every major decision created a ghost: the person you would have become if you'd chosen differently. At the end, all the ghosts gather, and you see the family reunion of selves that never existed.
Wasted time next.`
        },
        {
          id: 41,
          title: 'You will regret the time you wasted',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  The hours scrolling through nothing.<br/>
                  The years in jobs you hated.<br/>
                  The decades worrying about things that never happened.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You had time.<br/>
                  So much time.<br/>
                  And you spent it waiting.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  For the right moment.<br/>
                  For enough money.<br/>
                  For permission.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Now the time is gone.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And you're still waiting.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 41 — You Will Regret the Time You Wasted
#### 🎯 Purpose
Time is the only truly non-renewable resource, and most of us waste staggering amounts of it. This slide confronts the retrospective horror of realizing how much time evaporated into nothing.
#### 🎭 Delivery
"Hours scrolling through nothing" — this should sting with contemporary recognition. "Decades worrying about things that never happened" — anxiety's cruelest trick. "And you're still waiting" — the pattern persists even as death approaches.
#### 💡 The Waiting Trap
We wait for conditions to be perfect. We wait for permission we don't need. We wait because starting is scary. And then we run out of time while waiting to begin. The tragedy is the consistency — we never learn.
#### 🌊 The Unspent Currency
Time spent is gone forever. Time unspent but unused is the same as time that never existed. The hours you didn't use are functionally identical to hours you never had.
Unspoken love next.`
        },
        {
          id: 42,
          title: 'You will wish you had said "I love you" more',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You assumed they knew.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You showed it in other ways.<br/>
                  Provided for them.<br/>
                  Stayed.<br/>
                  Sacrificed.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  But you didn't say it enough.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Now some of them are gone.<br/>
                  And the words sit unsaid in your throat.<br/>
                  Heavy. Useless. Too late.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  They cannot hear you anymore.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 42 — You Will Wish You Had Said "I Love You" More
#### 🎯 Purpose
Of all deathbed regrets, this may be the most universal: unspoken love. We assumed. We showed it other ways. But we didn't say it, and now the words have nowhere to go.
#### 🎭 Delivery
"You assumed they knew" — start matter-of-fact. The list of showing love is noble: providing, staying, sacrificing. But: "You didn't say it enough." The final image — words heavy in the throat, useless, too late — should feel physical.
#### 💡 The Substitution Problem
We substitute action for words because action feels more concrete. But words have their own power, their own necessity. Some things need to be spoken. Actions show love; words name it.
#### 🌊 The Closed Door
"They cannot hear you anymore." Death is deaf. You can speak to graves, but graves don't listen. The opportunity for verbal love ends with the last heartbeat.
Loss of Self section begins next.`
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
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                  This loss of self will erase me.<br/>
                  Not gradually.<br/>
                  Not gently.<br/>
                  Piece by piece.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 43 — Loss of Self: Section Opening
#### 🎯 Purpose
The seventh confrontation — the dissolution of identity. Not just losing abilities but losing the sense of who you are. The self you built over a lifetime disassembled.
#### 🎭 Delivery
"Piece by piece" is the key phrase — not a sudden disappearance but a slow disintegration. You watch yourself being taken apart. This is perhaps the most existentially terrifying section.
#### 💡 The Constructed Self
We build identity from roles, abilities, memories, relationships. Each can be removed. What remains when enough pieces are gone? Is there a "you" underneath, or only the collection?
#### 🌊 Transition
Regret section complete. Now we face the erosion of identity itself.
Loss of roles comes next.`
        },
        {
          id: 44,
          title: 'You will lose your roles',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You were a worker. Then you retired.<br/>
                  You were a provider. Then you needed providing for.<br/>
                  You were strong. Then you became weak.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  One by one, the things that defined you will be taken.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your career. Your independence. Your usefulness.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will wonder who you are without them.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And have no answer.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 44 — You Will Lose Your Roles
#### 🎯 Purpose
Identity is largely constructed from roles: worker, provider, parent, friend. As we age and decline, these roles are stripped away one by one. What's left when the roles are gone?
#### 🎭 Delivery
The parallel structure — "You were... Then you..." — shows the reversals. Each one is a small death. "And have no answer" should feel like standing at the edge of a void.
#### 💡 The Role-Based Self
We know who we are by what we do. I am a teacher, a mother, a runner. Remove these and the question "Who am I?" becomes genuinely unanswerable.
#### 🌊 The Stripping
"Your career. Your independence. Your usefulness." These aren't just losses — they're amputations of identity. Without them, you're not a diminished version of yourself. You're a stranger.
Loss of dignity next.`
        },
        {
          id: 45,
          title: 'You will lose your dignity',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Strangers will see you naked.<br/>
                  Touch you intimately.<br/>
                  Discuss your body as if you're not there.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will be talked about in third person<br/>
                  while you're in the room.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  "He needs to be turned."<br/>
                  "She had an accident again."
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will be a patient, a case, a room number.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Not a person anymore.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 45 — You Will Lose Your Dignity
#### 🎯 Purpose
Dignity — that sense of being respected, of having bodily autonomy — is often the first casualty of medical decline. This slide confronts the institutional reduction of personhood.
#### 🎭 Delivery
The clinical details — "naked," "touch you intimately" — should feel intrusive. The third-person quotes ("He needs to be turned") demonstrate erasure. You're present but not acknowledged as a subject.
#### 💡 The Object Position
To become an object is to be discussed rather than addressed. Grammar reveals treatment: "the patient in 412" versus a name, a history, a person. Medical systems optimize for efficiency, not humanity.
#### 🌊 Dehumanization
"Not a person anymore." This is the end of the slide but also the end of something essential. When others stop treating you as fully human, do you remain fully human to yourself?
Loss of privacy next.`
        },
        {
          id: 46,
          title: 'You will lose your privacy',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Everything will be monitored.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  What you eat. When you sleep.<br/>
                  When you use the bathroom.<br/>
                  Whether you complied with medication.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Doors will be opened without knocking.<br/>
                  Belongings will be moved without asking.<br/>
                  Decisions will be made without consulting you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will have no secrets.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  No space that is yours alone.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 46 — You Will Lose Your Privacy
#### 🎯 Purpose
Privacy is foundational to personhood — the ability to have thoughts, spaces, and moments that are yours alone. Institutional care often eliminates this entirely.
#### 🎭 Delivery
The monitoring list — eating, sleeping, bathroom — should feel surveilling. "Without knocking... without asking... without consulting" — the repeated structure emphasizes systematic removal of agency.
#### 💡 The Transparent Life
Privacy isn't just about hiding things. It's about having control over what's revealed and when. When that control vanishes, so does a fundamental aspect of being a self.
#### 🌊 No Room of One's Own
"No space that is yours alone." Even your interior space — your thoughts, your feelings — becomes subject to assessment. "How are we feeling today?" asked without expecting honesty.
Loss of voice next.`
        },
        {
          id: 47,
          title: 'You will lose your voice',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Not just your physical voice.<br/>
                  Your authority. Your agency. Your say.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Others will decide what's best for you.<br/>
                  Where you live. What you eat. When you sleep.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will be overruled by family.<br/>
                  By doctors.<br/>
                  By well-meaning strangers.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your preferences will become suggestions.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Then ignored entirely.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 47 — You Will Lose Your Voice
#### 🎯 Purpose
Voice is metaphorical here — not larynx but agency. The power to make decisions about your own life is progressively transferred to others, often with the best of intentions.
#### 🎭 Delivery
Distinguish "voice" from physical voice immediately. "Authority. Agency. Your say." These are weighted words. "Well-meaning strangers" is particularly cutting — benevolence doesn't make disempowerment less real.
#### 💡 The Demotion
"Preferences will become suggestions." Watch the status of your desires devolve: from commands, to requests, to preferences, to suggestions, to ignored noise. Each step is a loss of power.
#### 🌊 The Silencing
"Then ignored entirely." At the end, you may be physically present, even speaking, but your words carry no weight. You've become advisory to your own existence.
Becoming unrecognizable next.`
        },
        {
          id: 48,
          title: 'You will become unrecognizable to yourself',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You will look at old photos and wonder:<br/>
                  Who was that person?
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  So full of energy.<br/>
                  So full of plans.<br/>
                  So full of life.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will not feel connected to them.<br/>
                  It will seem like someone else's story.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  The person you were is already dead.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Only the husk remains.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 48 — You Will Become Unrecognizable to Yourself
#### 🎯 Purpose
The final estrangement — not just from others but from your own history. Looking at photos and feeling no connection to the vibrant person there. You become a stranger to yourself.
#### 🎭 Delivery
"Who was that person?" — this question should feel genuinely unanswerable. The parallel "So full of" list emphasizes what's been lost. "The person you were is already dead" — multiple deaths before the final one.
#### 💡 Serial Selves
We're not one continuous person — we're a succession of selves, each dying to make room for the next. The final self looks back at all the others and feels... nothing. No connection. Just evidence of someone who used to exist.
#### 🌊 The Husk
"Only the husk remains." What's left when identity is stripped away? A body, a name, a collection of physical characteristics. The interior — the essential self — has already departed.
Final Ending section begins next.`
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
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#e74c3c' }}>
                  This ending will claim me.<br/>
                  Not as abstract.<br/>
                  Not later.<br/>
                  Now. Always now.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a1a',
          notes: `### 49 — The Ending: Section Opening
#### 🎯 Purpose
The final section. Not preparation, not fear, not regret — the ending itself. The moment that waits for all of us, that is in some sense already happening.
#### 🎭 Delivery
"Now. Always now." — This is the key phrase. Death is not a future event; it's a present process. Every moment is occurring within death's domain. Let this hit with its full paradox.
#### 💡 The Eternal Present
We speak of death as "later." But what is later? Every later becomes now. There is no "later" — only endless "now," and death inhabits every now.
#### 🌊 Transition
Loss of Self complete. Now we confront the present tense of dying.
Dying right now next.`
        },
        {
          id: 50,
          title: 'You are dying right now',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Every breath is one less you'll take.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Every heartbeat counts down.<br/>
                  Every moment passes and will not return.<br/>
                  Ever.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  The cells in your body are dying right now.<br/>
                  Your telomeres are shortening.<br/>
                  Your DNA is degrading.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You are not moving toward death.<br/>
                  You are death in progress.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  A slow-motion decay that began the moment you were born.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 50 — You Are Dying Right Now
#### 🎯 Purpose
This slide collapses the distance between audience and death. Not "you will die" but "you are dying." Right now. This breath. This heartbeat. The biological reality.
#### 🎭 Delivery
"Every breath is one less" — start with the immediate, the breath you just took. Telomeres, DNA — these aren't metaphors; they're happening in every cell as you speak. "Death in progress" is the reframe.
#### 💡 The Present Tense
We speak of death in future tense. That's a lie. Death is present tense. It's not something waiting for you; it's something you're inside of, have been inside of since conception.
#### 🌊 Birth as Beginning of Death
"Began the moment you were born." Birth isn't the opposite of death — it's the inauguration of death. The countdown started immediately. You've been dying since you were born.
The last day next.`
        },
        {
          id: 51,
          title: 'There is no preparing',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You cannot practice dying.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You can think about it.<br/>
                  Plan for it.<br/>
                  Accept it philosophically.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  But when it comes—<br/>
                  when you feel your body shutting down—<br/>
                  when the darkness closes in—
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  All your preparation will mean nothing.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  You will be as afraid as anyone ever was.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 51 — There Is No Preparing
#### 🎯 Purpose
We comfort ourselves with preparation — meditation, philosophy, acceptance. But this slide cuts through that comfort. When death arrives, all preparation falls away. You face it raw.
#### 🎭 Delivery
Acknowledge the preparations — they're valid, they help some. Then: "But when it comes—" The dash creates suspension. "All your preparation will mean nothing" — not cruel, just true.
#### 💡 The First Time
Death is always a first time. You can't practice. You can't rehearse. Every coping mechanism you've developed is hypothetical until the moment arrives, and then it's real in a way no hypothesis could capture.
#### 🌊 Equal Terror
"As afraid as anyone ever was." Death is the great equalizer. The philosopher dies as frightened as the fool. Preparation may help the lead-up, but the moment itself? Unknowable until experienced.
Ordinary last thoughts next.`
        },
        {
          id: 52,
          title: 'Your last thoughts will be ordinary',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  You imagine you'll think profound things.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Review your life.<br/>
                  Find meaning.<br/>
                  Achieve closure.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  But you won't.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You'll think about the discomfort.<br/>
                  The pain.<br/>
                  Wanting water.<br/>
                  Needing to pee.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Your last thought will probably be:<br/>
                  "I'm cold."
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={2.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Or nothing at all.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 52 — Your Last Thoughts Will Be Ordinary
#### 🎯 Purpose
We romanticize last thoughts — the deathbed revelation, the life review, the profound peace. Reality is messier. Bodies demand attention even at the end. The body's needs don't pause for transcendence.
#### 🎭 Delivery
The expected list (life review, meaning, closure) should feel earnest. Then: "But you won't." The list of physical concerns (cold, thirsty, needing to pee) should feel bathetic, deflating. "Or nothing at all" — perhaps the most likely option.
#### 💡 The Persistent Body
Even in death, the body makes demands. It doesn't care about your existential closure. It wants warmth, hydration, relief. And it will occupy your consciousness with these demands until consciousness ends.
#### 🌊 Anticlimactic Exit
"I'm cold." Not "I understand everything now." Not "I forgive everyone." Just... cold. The mundane persists to the end. This is both disappointing and, strangely, comforting.
Everything stops next.`
        },
        {
          id: 53,
          title: 'Everything you are will stop',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your thoughts will cease.<br/>
                  Your awareness will end.<br/>
                  You will not exist.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Not sleeping.<br/>
                  Not dreaming.<br/>
                  Not anything.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  The you reading this will be gone.<br/>
                  Erased.<br/>
                  As if it never was.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  And you will not know it.<br/>
                  Because there will be no you to know.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  Just... nothing. Forever.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 53 — Everything You Are Will Stop
#### 🎯 Purpose
This is the core confrontation — not the process of dying but the state of being dead. The absolute cessation of experience. Not unconsciousness, which implies a sleeper who might wake. Nothing.
#### 🎭 Delivery
"Not sleeping. Not dreaming. Not anything." — Rule out the comforting comparisons. "The you reading this" — make it direct, personal. "Just... nothing. Forever." — the ellipsis, the pause, then the infinite duration.
#### 💡 The Inconceivable
We cannot imagine non-existence because imagining requires an imaginer. Every attempt to picture "nothing" puts you outside, observing. But there's no outside. There's no observing. There's no you.
#### 🌊 The Relief
"You will not know it." Here's the strange comfort: death is only terrible from the outside. From the inside, there is no inside. The horror of death belongs entirely to the living.
World continues next.`
        },
        {
          id: 54,
          title: 'The world will continue without you',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  The sun will rise the day you die.<br/>
                  And every day after.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  People will eat breakfast.<br/>
                  Go to work.<br/>
                  Laugh at jokes.<br/>
                  Fall in love.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  The world you spent your entire life experiencing<br/>
                  will continue as if you never existed.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Because to the world, you don't matter.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And soon, no one will remember you did.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 54 — The World Will Continue Without You
#### 🎯 Purpose
The world feels centered on us — we're always at its center. But we're not. The world doesn't notice individual departures. It just... continues. This slide confronts cosmic indifference.
#### 🎭 Delivery
"The sun will rise" — start with the certain, the beautiful, the indifferent. The mundane list (breakfast, work, jokes, love) shows life persisting. "You don't matter" — not cruel, just scale.
#### 💡 The Continuity
Every person who ever died discovered this: the world doesn't pause. There's no moment of cosmic recognition. The machinery of existence grinds on, heedless of any particular cog.
#### 🌊 Insignificance as Freedom
"You don't matter." This could be crushing or liberating. If your death doesn't dent the universe, neither do your mistakes. The same insignificance that makes death lonely makes life lighter.
Being forgotten next.`
        },
        {
          id: 55,
          title: 'You will be forgotten',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  Your children will remember you.<br/>
                  Then your grandchildren will remember stories about you.<br/>
                  Then their children will not remember you at all.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Three generations.<br/>
                  Maybe four.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  Then your name will be mentioned for the last time.<br/>
                  By someone who never knew you.<br/>
                  Who gets the details wrong.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  And then never again.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  As if you never existed at all.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495e',
          notes: `### 55 — You Will Be Forgotten
#### 🎯 Purpose
Memory is our secular afterlife — we live on in others' minds. But memory is finite and generational. In a few generations, you're a name, then a story, then nothing. The final death.
#### 🎭 Delivery
Track the decay: children (vivid), grandchildren (stories), great-grandchildren (nothing). "Three generations. Maybe four." — clinical, mathematical. The last mention by someone who "gets the details wrong" — even the memory is inaccurate.
#### 💡 The Second Death
They say you die twice: once when your heart stops, once when your name is spoken for the last time. Most people experience both within a century. The second death is quieter but more complete.
#### 🌊 Complete Erasure
"As if you never existed at all." From the universe's perspective, this is literally true. A hundred years from now, there will be no evidence you ever lived except perhaps a headstone no one visits.
How does that make you feel next.`
        },
        {
          id: 56,
          title: 'This is not avoidable',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '0.9em' }}>
                  No amount of money will save you.<br/>
                  No achievement will exempt you.<br/>
                  No belief will rescue you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You cannot negotiate with death.<br/>
                  You cannot bargain.<br/>
                  You cannot cheat.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  It is the one appointment you cannot miss.<br/>
                  The one debt you cannot avoid.<br/>
                  The one truth you cannot deny.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.4}>
                <p style={{ fontSize: '0.9em', marginTop: '1em' }}>
                  You will die.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '0.9em', marginTop: '1em', color: '#95a5a6' }}>
                  And you know it.
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2c3e50',
          notes: `### 56 — This Is Not Avoidable
#### 🎯 Purpose
Every exemption has been tried. Wealth, fame, religion, medicine — none provide escape. This slide closes all exits. There is no negotiating with mortality.
#### 🎭 Delivery
The triads ("no amount... no achievement... no belief") should feel like doors closing. "You cannot negotiate. You cannot bargain. You cannot cheat." — each denial more final. "And you know it" — you've always known.
#### 💡 The Non-Negotiable
Humans are negotiators. We solve problems, find workarounds, discover loopholes. Death has none. It's the one absolute in an otherwise flexible universe.
#### 🌊 The Known Unknown
"And you know it." This isn't news. You've known since childhood. But knowing and *knowing* are different. This presentation has been an attempt to move death from the first kind of knowing to the second.
Final confrontation next.`
        },
        {
          id: 57,
          center: true,
          title: '',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p style={{ fontSize: '1.2em', marginTop: '2em' }}>
                  Don't distract yourself.<br/>
                  Don't rationalize.<br/>
                  Don't look away.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.8}>
                <p style={{ fontSize: '1.2em', marginTop: '2em' }}>
                  This will happen to you.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.3}>
                <p style={{ fontSize: '1.2em', marginTop: '2em' }}>
                  To this body.<br/>
                  This mind.<br/>
                  This awareness reading these words.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.8}>
                <p style={{ fontSize: '1.5em', marginTop: '2em', color: '#e74c3c' }}>
                  You will die.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={2.3}>
                <p style={{ fontSize: '1em', marginTop: '2em', color: '#95a5a6' }}>
                  Now what?
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#000000',
          notes: `### 57 — Final Confrontation: Now What?
#### 🎯 Purpose
This is the end of the meditation. No more concepts, no more descriptions. Just the direct address: this is real, this is you, this is certain. And the question: now what?
#### 🎭 Delivery
Slow and direct. "This body. This mind. This awareness reading these words." — Point to yourself, point to the audience. Each word should land like a stone. "You will die." — Let this sit. Let there be silence. "Now what?" — This question is the gift. The entire meditation leads here.
#### 💡 The Gift of the Question
This meditation isn't meant to despair. It's meant to clarify. With death truly accepted — not intellectually but viscerally — the question "Now what?" becomes urgent and meaningful. What will you do with your diminishing time?
#### 🌊 The Open End
There is no slide 58. No tidy conclusion. No "but here's the bright side." The meditation ends in openness, in the question that each person must answer for themselves. What will you do now that you truly know you will die?

End of meditation. Allow silence. Allow the question to remain unanswered.`        }
      ]
    }
  ]
};