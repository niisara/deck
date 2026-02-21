import type { Deck } from './types';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const deathDeck: Deck = {
  id: 'death-deck',
  name: 'Death',
  description: 'A confrontational meditation on mortality and physical decay',
  category: 'Inner Intelligence',
  theme: 'black',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
  },
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
          backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80',
          notes: `[slowly] This will happen to me.
Not in theory. Not someday. [darkly] To this body.

[measured] Not humanity in general. Not a philosophical thought experiment.
This body. These hands. These lungs. This heartbeat.

[gravely] Every person who has ever lived has died. Every single one.
[whisper] I am not the exception. There is no exception.

[softly] The comfortable distance I keep between myself and death — that's a lie I tell myself to get through the day.
[pause] It doesn't change anything.`
        },
        {
          id: 2,
          title: 'The body will fail — not heroically',
          content: (
            <div style={{ textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="How Speech Failure Unfolds"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["💭 Thought is crystal clear"] --> B["🗣️ Mouth won't cooperate"]
    B --> C["Others jump in, finish your sentences"]
    C --> D{"Do they get it right?"}
    D -->|"Yes"| E["Partial relief — but it wasn't yours"]
    D -->|"No"| F["You are corrected about your own intentions"]
    F --> G["🤐 You nod — correcting them is too tiring"]
    style A fill:#e3f2fd,color:#000
    style G fill:#ffcdd2,color:#000
    style F fill:#fff9c4,color:#000
    style E fill:#c8e6c9,color:#000`}
                />
              </div>
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this body.

[bitterly] The body will fail — not heroically.
Not in some dramatic cinematic moment. [with disgust] In small, humiliating ways nobody warns you about.

[softly] One day, your words will not come out right.
[gently] Picture it — you're trying to tell your daughter something important. The thought is crystal clear in your mind. But your tongue won't cooperate. The word sits right there, you can almost taste it, and it won't come out.

[frustrated] You will know exactly what you want to say — and your mouth will not obey.
[resigned] So people jump in. They finish your sentences. They get it wrong. They tell you what you meant. And you just nod, because fighting it takes more energy than you have left.

[sadly] You will be corrected about your own intentions.
By the people who love you most. [whisper] And you'll let them, because correcting them hurts more than being misunderstood.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this body.

[gravely] Control will leave before life does.
Your body will stop asking permission.

[with shame] At some point, your body will release waste without asking you.
[flatly] Not once, as some terrible accident. As routine. Tuesday. Thursday. Saturday. Every time someone has to clean you.

[softly] You won't feel dramatic sorrow.
[voice breaking] You'll feel your face burn with shame. You'll apologize. Over and over. To the nurse, to your daughter, to your son. For something you can't control. For existing in a body that has already quit on you.

[sadly] The worst part isn't the mess.
[whisper] It's knowing you used to be someone who took care of others. And now you can't take care of yourself.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this face.

[haunted] Your face will become unfamiliar.
You will catch your reflection and for a split second wonder who that old person is. [pause] Then it hits you.

[firmly] Not metaphorically. Literally.
[reflectively] Your brain still pictures you at thirty-five. Full of energy. Sharp jaw. Clear eyes. [with dread] Then a mirror ambushes you in a store window and you see someone your parents' age staring back. Except it's you.

[softly] Sometimes you'll forget you're old. Then catch your reflection. And remember.
[sadly] Like being told terrible news for the first time, every time. You never get used to it. The shock resets overnight. You wake up feeling like yourself, and then the mirror tells you the truth again.

[whisper] Each time will feel like the first time.
[bitterly] That's the cruelty — your brain refuses to update the file.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this body.

[gravely] Pain will become your weather.
[resigned] Not a storm that passes. The sky itself. Always there. The background to everything you do.

[softly] You will wake up in pain.
[heavily] Before your eyes open, before any thought forms, pain is there first. Waiting. It slept with you. It will have breakfast with you. It will sit beside you for every hour of every day, and it will never leave.

[flatly] You will become an expert in types of ache.
[tired] Sharp — that's the hip. Dull — that's the lower back. Throbbing — the knees. Constant — everywhere. You'll describe it to doctors so many times the words lose all meaning.

[bitterly] It will bore you before it kills you.
[whisper] That's the thing no one tells you. Pain gets tedious. The same suffering, the same complaints, the same helplessness, day after day. Even agony becomes monotonous.`
        },
        {
          id: 6,
          title: 'Your mind will betray you quietly',
          content: (
            <div style={{ textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Cognitive Decline: The Quiet Theft"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["🧠 Forget the word for common things"] --> B["Call children by wrong names"]
    B --> C["Forget you made the mistake"]
    C --> D["Tell the same story 3× in one hour"]
    D --> E["😶 People smile patiently — exchange glances"]
    E --> F["You don't notice"]
    F --> G["💨 The you that remembers fades before the you that exists"]
    style A fill:#e3f2fd,color:#000
    style E fill:#fff9c4,color:#000
    style G fill:#ffcdd2,color:#000`}
                />
              </div>
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this mind.

[haunted] Your mind will betray you quietly.
[softly] Not with a dramatic collapse. With small, creeping thefts you barely notice until the damage is done.

[gently] You will forget the word for common things.
[sadly] You'll point at the toaster and say "the thing." You'll call your son by your brother's name. You'll do it and not even realize.

You will tell the same story three times in one hour.
[resigned] And people will smile patiently, the way you smile at a child. Each time will feel like the first. They'll exchange glances. [whisper] You won't notice. That's the mercy and the horror — you don't know you're fading.

[voice breaking] The you that remembers will fade before the you that exists.
[hollowly] Your body will keep going. Your heart will keep beating. But the thread that connects who you were yesterday to who you are today will snap. [pause] And you won't even know it snapped.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this life.

[gravely] You will become a burden.
[softly] Not because they say so. Because you'll see it in their eyes before they can hide it.

[gently] You will need help getting dressed.
[sadly] Buttons your fingers can't manage. Shoes you can't reach. The flicker of frustration on their face as they kneel down to help — they'll mask it with a smile, but you'll catch it. [whisper] You'll always catch it.

[voice breaking] You will hear them sigh when they think you can't hear.
[resigned] They're exhausted. They have their own lives. Their own children needing them. And here you are — another obligation, another task, another thing they have to do before they can live their day.

[barely audible] You will apologize for existing. For needing. For still being here.
[whisper] And you will mean it. Not as a gesture. You will genuinely wish you could disappear, that you could stop being a weight on the people you love most in this world.`
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
          notes: `[slowly] This decay will claim me.
[darkly] Not in fantasy. Not eventually.
To these bones and flesh.

[gravely] The previous horror was about experience — what it feels like to lose agency, to lose your mind, to become a burden.

[building intensity] Now we enter the body itself.
The actual physical machinery failing. Skin tearing. Bones cracking. Heart stuttering. Eyes dimming. Teeth falling.

[haunted] This is what decomposition looks like while you're still alive.
[whisper] The body doesn't wait until you die to begin falling apart. It starts early and picks up speed.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this skin.

[with disgust] Your skin will become thin as tissue paper.
[reflectively] Run your finger across the back of your hand right now. Feel that? That elasticity? That bounce? It won't be there. [disturbed] Pull the skin up — someday it will stay where you left it. Tent up. Take minutes to settle back down. Like a science experiment you're performing on yourself.

[grimly] A simple bump will tear it open.
[flatly] Hit your arm on a doorframe — it splits. Blood pools under skin so thin you can see it spreading. Purple and blue like spilled ink. Wounds will refuse to heal. The bandage comes off and the tear is still there, angry and raw, week after week.

[sadly] Your hands will show every vein.
[whisper] A roadmap drawn in purple and blue, running under translucent skin. These are your hands. The ones that held children, that built things, that touched the people you loved. [voice breaking] Now they look like they belong to a corpse.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To these bones.

[gravely] Your bones will hollow and crack.
[clinically] They'll become porous, light, fragile — like honeycomb. The frame that held you upright for decades will turn against you.

[with dread] You will break a rib from coughing. A hip from standing. A vertebra from sitting wrong.
[firmly] That's not exaggeration. That's osteoporosis. A cough. A chair. Standing up from bed. These aren't accidents — these are just existing. Your skeleton can't handle the weight of ordinary life anymore.

[resigned] Each fracture will heal slower than the last. If it heals at all.
[grimly] And while you lie in bed waiting, the muscles waste away, the pneumonia sets in, the blood clots form. One broken bone starts a chain reaction that doesn't stop.

[haunted] The body you stand in will collapse inward.
[whisper] You will shrink. Your spine will curve. You will become physically smaller, folding in on yourself like a building being demolished in slow motion.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this heart.

[gravely] Your heart will strain and stutter.
[reflectively] The engine that never stopped, not once, since before you were born — it's wearing out. And you'll feel it.

[anxiously] You will feel it skip beats. Race for no reason. Pause for too long.
[fearfully] Lying in bed at night, you'll feel it — that flutter, that missed beat, that extra-hard thump that makes you hold your breath. [whisper] Is this it? Is this the one? [pause] Then it settles. Until next time.

[exhausted] Walking to the bathroom will exhaust you.
[breathlessly] Fifteen feet. That's all. And halfway there you'll need to sit down, chest heaving, arms shaking, wondering how something so small became so impossible.

[darkly] Then be disappointed it wasn't.
[hollowly] At some point, the skipped beat won't scare you anymore. It'll feel like a promise that keeps getting broken. [whisper] You'll welcome it. And that's when you know something inside you has already died.`
        },
        {
          id: 12,
          title: 'Your organs will fail in sequence',
          content: (
            <div style={{ textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Organ Failure Cascade"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    K["🫘 Kidneys filter less"] --> L["🫀 Liver processes slower"]
    L --> Lu["🫁 Lungs capture less oxygen"]
    Lu --> T["⚗️ Toxins build up in blood"]
    T --> M["Metal taste • Breath smells of decay"]
    M --> F["💧 Body retains fluid"]
    F --> S["Ankles swell • Belly distends"]
    S --> D["☠️ You look pregnant with your own death"]
    style K fill:#e3f2fd,color:#000
    style T fill:#fff9c4,color:#000
    style S fill:#ffcdd2,color:#000
    style D fill:#1a1a1a,color:#fff`}
                />
              </div>
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To these organs.

[gravely] Your organs will fail in sequence.
[clinically] Not all at once. Like dominoes. One fails, stresses the next, which stresses the next. A cascade.

[flatly] Your kidneys will filter less. Your liver will process slower. Your lungs will capture less oxygen.
[with disgust] Toxins build up in your blood. You taste metal at the back of your throat. Your breath smells like something rotting — because something is. [whisper] You are. From the inside.

[heavily] Your body will retain fluid. Your ankles will swell. Your belly will distend.
[grimly] The body filling up with what it can no longer process. Carrying its own poison, expanding with it.

[haunted] You will look pregnant with your own death.
[darkly] That's not metaphor. That's what end-stage organ failure looks like. Swollen, distended, bloated with the waste your body can no longer expel. [whisper] Growing something that will kill you.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To these muscles.

[gravely] Your muscles will consume themselves for fuel.
[with horror] Your body, starving for energy, will eat its own meat. Your arms will thin until the bones show through. Your legs will barely hold you upright. Your hands will tremble from the effort of holding a cup of tea.

[resigned] You will drop things. Spill things. Break things.
[sadly] The glass slips. The plate crashes. The book falls from fingers that can no longer grip. Every object in the world becomes a test you're failing.

[softly] People will start cutting your food for you.
[voice breaking] Someone at the table will lean over and cut your steak into small pieces. The way you once did for your children. The reversal is so complete it's almost poetic. [bitterly] Almost.

[whisper] Then feeding you.
[hollowly] Spoon to your lips. Wiping the spill from your chin. You end the way you began — dependent, helpless, and unable to do the most basic thing a human being can do for themselves.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To these eyes.

[sadly] Your world will become blurry, then dark.
[softly] The world you've spent your entire life looking at — it's going to leave you. Not all at once. The edges go first.

[gently] Colors will fade to gray. Faces will become shadows.
[voice breaking] Imagine your daughter walks into the room. You hear her voice. You know it's her. But you can't see her face. Just a shape in the doorway. A blur where features used to be.

[resigned] Reading will become impossible. Then recognizing faces.
[hollowly] Books — gone. Newspapers — gone. The faces of people you love — gone. You will live among strangers you recognize only by their voices. Your world reduced to sound and touch.

[whisper] Then light itself will go.
[haunted] The last thing to leave. Not sight, not detail, not color — light. The world will simply go dark. [pause] And it won't come back.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To these teeth.

[with disgust] Your gums will recede and bleed.
[grimly] They pull back from your teeth like tide going out. The bone underneath dissolves. Your teeth, untethered, begin to move.

[disturbed] Your teeth will wiggle when you touch them. Then fall out one by one.
[flatly] You'll find them in your food. Bite into an apple and leave a tooth behind. Find one on your pillow in the morning. Cough into your hand and see a tooth sitting there, root and all, like it was never attached to you.

[haunted] Your face will collapse inward.
[clinically] Without teeth, the jaw shrinks. The lips fold in. The chin meets the nose. The structural architecture of your face caves. You look in the mirror and see the skull underneath, barely disguised.

[whisper] You will smile and look like a corpse.
[darkly] That's not cruelty — that's anatomy. Your face is already previewing what death will look like. [pause] Every smile is a rehearsal.`
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
          notes: `[slowly] This isolation will hollow me.
[darkly] Not as metaphor. Not as possibility.
In lived experience.

[gravely] The body fails, yes — that's horrifying enough.
[softly] But the world around you fails too. People leave. People die. The circles of connection that gave life meaning shrink until there's nothing left but silence.

[haunted] There's a death before death.
[whisper] Social death. The death of connection. The death of being seen, known, needed by anyone. [pause] It comes first. The body just catches up later.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this heart.

[gravely] You will attend funeral after funeral.
[sadly] Not one grief. Not two. A procession. The people who made your life — leaving, one by one. Friends. Siblings. Colleagues. Lovers. [voice breaking] And if you're cursed with enough years — your own children.

[softly] Each death will take a piece of your history.
[reflectively] The inside jokes die with them. The shared memories — that trip, that night, that look you gave each other across the room — gone. No one else was there. No one else remembers. [hollowly] You become the sole witness to a life no one can verify.

[haunted] Then you will forget them too.
[whisper] The last keeper of the memories loses the memories. The faces blur. The voices fade. The stories scramble. [pause] And there's no one left to remind you what you've lost. No one left at all.`
        },
        {
          id: 18,
          title: 'People will visit less and less',
          content: (
            <div style={{ textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="The Disappearing Visit Timeline"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["🌹 At first — visits often, flowers, hours"] --> B["📅 Then once a week"]
    B --> C["📆 Then once a month"]
    C --> D["🎄 Then holidays only"]
    D --> E["📵 Then not at all"]
    E --> F["📞 Waiting by the phone for calls that don't come"]
    F --> G["You won't blame them. But you will notice."]
    style A fill:#c8e6c9,color:#000
    style C fill:#fff9c4,color:#000
    style E fill:#ffcdd2,color:#000
    style G fill:#1a1a1a,color:#fff`}
                />
              </div>
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] In this lived life.

[softly] People will visit less and less.
[gently] At first, they come often. They bring flowers. They stay for hours. [resigned] Then once a week. Then once a month. Then on Christmas if you're lucky. [whisper] Then not at all.

[understanding] You will understand. They have lives.
[flatly] Responsibilities. Children. Jobs. You are no longer the center of anyone's world. You're an item on a checklist, squeezed between groceries and dentist appointments. [sadly] They love you. But love doesn't mean presence.

[lonely] You will wait by the phone for calls that don't come.
[voice breaking] Sitting in the chair, glancing at the phone, willing it to ring. It doesn't. And you won't blame them. [whisper] But you will notice. God, you will notice every empty hour.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] In this silence.

[hollowly] Days will pass without another voice.
[flatly] Not a day. Days. The last person you spoke to was the pharmacist, three days ago. Before that, nobody. After that, nobody.

[softly] You will narrate your actions to the empty room.
[gently] "Now I'll make tea." "Time for lunch." "Where did I put that?" You'll answer yourself. Have full conversations alone. [sadly] Not because you're losing your mind — because the silence is unbearable.

[haunted] You will forget what your voice sounds like to others.
[whisper] Because there are no others. No one to respond. No one to say your name. No one to confirm you're still real. [barely audible] You become a ghost haunting your own house, talking to walls that don't answer back.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this existence.

[gravely] The world will forget you exist.
[flatly] Your emails go unanswered. Your calls unreturned. Not out of cruelty — out of irrelevance. You simply don't register anymore.

[bitterly] Your opinions will be dismissed as outdated. Your stories as repetitive. Your presence as optional.
[hollowly] You've been filed away. The world moved on while you were still in it.

[slowly] You could die tomorrow and most people wouldn't know for weeks.
[haunted] Sit with that. Really sit with it. The mail would pile up. The milk would expire. The phone would ring into nothing. [whisper] Weeks. Maybe months. [pause] And life would continue exactly as it does now, without a single ripple.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this person.

[sadly] People will look through you in public.
[resigned] Not at you. Through you. Like glass. Like you've already become part of the background.

[bitterly] Waiters will serve you last. Store clerks will ignore you. Young people will talk over you.
[flatly] You'll stand in line and be skipped. You'll raise your hand and not be called on. You'll speak and people will not hear you. Your words fall out of your mouth and dissolve before they reach anyone.

[haunted] You will wonder if you've already died and no one told you.
[whisper] And it won't feel like a joke. It will feel like a genuine question. [pause] When no one sees you, when no one responds, what proof do you have that you still exist?`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[softly] In this bed.

[lonely] The bed will be too big. Too cold. Too quiet.
[sadly] You'll lie on your side, the way you always did, and there's nothing behind you but empty space. Cold sheets. No warmth. No breathing. No weight beside you.

[voice breaking] You will reach out in the night for someone who isn't there.
[gently] It's a reflex. Decades of reaching. Your arm moves before your brain remembers. Then your hand lands on nothing, and you remember. [whisper] Again.

[haunted] You will wake up and forget they're gone. Then remember. Every single morning.
[softly] Sleep resets the grief. For those few groggy seconds, everything is normal. [with dread] Then reality floods in. They're gone. Every morning is the morning after they died.

[barely audible] You will talk to their photo. It will not answer.
[whisper] You'll say goodnight. You'll tell them about your day. You'll ask what they think. [pause] And the silence that follows will be the loneliest sound in the world.`
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
          notes: `[slowly] This terror will find me.
[darkly] Not in nightmares. Not theoretically.
In the darkness at 3 AM.

[haunted] 3 AM is when it comes.
[whisper] The house is silent. The darkness is thick. And your mind starts its work. Every fear you pushed down during the day climbs out and sits on your chest.

[fearfully] Falling. Dying alone. Hospitals. Forgetting. Being a burden. Pain.
[gravely] These aren't abstract concerns. These are the things that wake people at night, that they never admit to their families, that they carry alone in the dark.`
        },
        {
          id: 24,
          title: 'You will be afraid of falling',
          content: (
            <div style={{ textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="The Fall Chain — 20-30% One-Year Mortality"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["🚶 One Fall\n(wet floor, loose rug,\nuneven pavement)"] --> B["🦴 Broken Hip"]
    B --> C["🛏️ Bedridden"]
    C --> D["🫁 Pneumonia"]
    D --> E["💀 Death"]
    style A fill:#fff9c4,color:#000
    style B fill:#ffcdd2,color:#000
    style C fill:#ffcdd2,color:#000
    style D fill:#c62828,color:#fff
    style E fill:#1a1a1a,color:#fff`}
                />
              </div>
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To these legs.

[anxiously] Every step will be a calculation.
[fearfully] Look down. Is the floor wet? Is the rug loose? Is the step even? Your entire world becomes a risk assessment. Every surface, every threshold, every stair is a potential ending.

[tense] You will grip railings with white knuckles. Shuffle instead of walk.
[resigned] You'll refuse dinner invitations because of stairs. Cancel plans because it rained and the sidewalk might be slick. Your life will shrink to the few safe paths you've memorized. [bitterly] Freedom traded for survival.

[gravely] You will know that one fall could be the last.
[clinically] A broken hip means bedridden. Bedridden means pneumonia. Pneumonia means death. [firmly] That's not paranoia — that's a 20-30% one-year mortality rate for elderly hip fractures. [whisper] One stumble. One wet floor. One uneven step. That's all it takes.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] In this apartment.

[fearfully] You will imagine the scenarios.
[anxiously] Falling in the bathroom. Face down on cold tile. Hip shattered. Unable to reach the phone. Lying there for hours. Days. Choking on dinner with no one to grab you from behind. The heart attack at 2 AM — gasping in the dark, alone.

[tense] You will keep your phone charged at all times.
[nervously] Within reach. Always. But you'll wonder — when the moment comes, when the pain hits, when the world goes sideways — will your hands work? Will you be able to dial? [whisper] Will you be able to speak?

[haunted] You will see the news stories. Elderly person found dead after three days.
[grimly] Found by a neighbor who noticed the mail. Found by a landlord who smelled something. Found by a daughter who finally thought to check. [whisper] And you will know, with absolute certainty, that could be you.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] In that building.

[with dread] You will know that going in doesn't mean coming out.
[fearfully] Every ambulance ride could be the last trip you take. Every hospital bed could be the last bed you sleep in. You've seen too many people — friends, siblings, your own parents — go in for something simple and never come home.

[nervously] You will resist calling the ambulance. Downplay symptoms.
[strained] "I'll be fine." You'll say this with chest pain. You'll say this barely breathing. [bitterly] Because the hospital is where they take your clothes, your dignity, your autonomy — and sometimes your life.

[softly] You will pack a bag "just in case."
[sadly] Leave notes on the counter. Put your affairs in order. Treat every hospital visit like a potential farewell. [voice breaking] And the sentence you try to write — "If I don't come back..." — you can't finish it. [whisper] Your hand stops. Your mind won't let you.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this brain.

[anxiously] Every memory lapse will terrify you.
[nervously] You forgot where you put your keys. Normal? Or is it starting? You blanked on a word mid-sentence. Everyone does that. [fearfully] Right? Right?

[tense] You will test yourself constantly.
[strained] What day is it? Wednesday. Good. What did I eat for breakfast? Eggs. Good. What's my daughter's name? [pause] ... The pause. That pause. [whisper] Even if the answer comes a second later, the pause is the thing that haunts you.

[with dread] You will fear becoming a stranger to yourself.
[voice breaking] Losing your memories. Your personality. Your self. The person you spent a lifetime becoming — erased. [whisper] And the worst part: still being alive when it's all gone. A breathing body with no one inside.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this conscience.

[gravely] This fear will consume you more than death itself.
[firmly] You can make peace with dying. What you can't make peace with is ruining your children's lives in the process.

[resigned] You will hide how much you're struggling.
[stubbornly] Pretend you can manage. Refuse help until you absolutely can't. [softly] Because the moment you accept help is the moment you become a project. A responsibility. A weight.

[bitterly] You will calculate the cost of your care.
[sadly] Your children's inheritance disappearing. Their vacation cancelled because of you. Their careers stalled. Their marriages strained. The math is brutal and it runs in your head all day.

[darkly] You will think about how much easier it would be for everyone if you just—
[whisper] You will think it often. Not as a dark impulse. [pause] As basic arithmetic.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this body.

[fearfully] You will wonder which kind of death awaits you.
[anxiously] Slow and painful? Fast but terrifying? Peaceful but lonely? [flatly] There's no menu. No choice. It will come however it comes.

[desperately] You will pray for quick. Hope for painless. Fear neither will come.
[haunted] Because you've seen how it usually goes. You've seen the morphine drip, the glazed eyes, the labored breathing that goes on for days. You've stood at bedsides and watched people you love suffer through the exit.

[softly] You will have watched others die. Seen the fear in their eyes.
[with dread] Not movie fear. Real fear. Animal fear. The kind that strips away everything — dignity, composure, faith — and leaves only the raw, screaming desire to not stop existing.

[whisper] And you will know those eyes will be yours.`
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
          notes: `[slowly] This pain will consume me.
[darkly] Not hypothetically. Not far off.
In this suffering vessel.

[gravely] The body is a container for pain.
[haunted] It stops being yours and becomes something you're trapped inside. A cage made of nerve endings, every one of them firing.

[measured] The previous sections talked about fear.
[firmly] This section is what the fear was about. Not the anticipation of suffering — the living inside of it. [darkly] The difference is everything.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this body.

[exhausted] You will wake up in pain. You will go to sleep in pain. You will dream of pain.
[resigned] There is no escape. No position that brings relief. No pillow arrangement. No medication that truly works. You will shift in bed fifty times a night, trying to find a way to exist that doesn't hurt. [whisper] There isn't one.

[hollowly] You will forget what it felt like to simply exist without hurting.
[flatly] Try to remember a time before pain. You can't. It's been so long the memory of comfort is gone. Pain has overwritten everything. It's not the exception anymore.

[barely audible] It's the norm.
[bitterly] Your best days aren't pain-free. They're just less. A four instead of a seven. And you're grateful for a four. [whisper] That's what your life has become — gratitude for slightly less agony.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this voice.

[anguished] There will be moments when the pain is so intense you will beg.
[desperately] To God — if you believe. To nurses — if they're there. To anyone who will listen. To no one. [voice breaking] To the empty ceiling above your bed, because you've run out of people to ask.

[pleading] You will say "please" until it loses meaning.
[exhausted] You will cry until there are no tears left. Your voice will break from screaming. [hollowly] And none of it — not one word, not one tear, not one scream — will make any difference at all.

[flatly] And the pain will continue. Indifferent to your suffering.
[gravely] Pain doesn't have ears. It doesn't negotiate. It doesn't care how good a person you were, how much you've already endured, how little you deserve this. [whisper] It just is. Relentless. Mechanical. Indifferent.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] In this exhaustion.

[wearily] There will come a point when death seems merciful.
[exhausted] When another day feels like a sentence — not a gift, a sentence. When morning light brings dread instead of hope. [bitterly] When someone says "You'll get better" and it sounds like the cruelest thing anyone has ever said to you.

[softly] You will understand why people give up.
[gently] Not from weakness. From exhaustion. There's a difference. Weakness breaks quickly. [resigned] Exhaustion is what happens when strength runs out over months, over years, one impossible day at a time.

[gravely] The will to live is not infinite.
[darkly] We treat it like some sacred, bottomless well. It isn't. Pain is patient. Pain has all the time in the world. [whisper] And your will to live has an expiration date. Pain will find it.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] In this isolation.

[softly] People will say they understand. [firmly] They don't. They can't.
[sadly] They can see your face twist. They can hear you moan. They can hold your hand and cry with you. [gravely] But they will never feel what you feel. Not even close.

[haunted] You are alone in your pain.
[darkly] Trapped in a body that only you inhabit. Your nervous system is a locked room. Others can press their faces against the window. They can see you suffering. [whisper] But they can't come inside. No one can.

[voice breaking] No one can take it from you. No one can share it.
[hollowly] This is the loneliest truth there is. Your suffering is yours. Completely, utterly, irrevocably yours. [pause] And you will bear it alone because there is no other option.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this agony.

[softly] At first, people will be alarmed by your pain.
[gently] They'll rush in. Adjust your pillows. Call the doctor. Stay late. Hold your hand through the night. They'll treat it like the emergency it is.

[resigned] But pain that doesn't end becomes background noise.
[sadly] They'll grow tired. Not of you — of the situation. They have their own lives to live. Their own exhaustion. The initial crisis fades into routine. [bitterly] Your screams become the furniture of the room — always there, no longer noticed.

[hollowly] Your agony will become routine.
[flatly] The same pain that once made everyone drop everything now gets a "How's the pain today?" asked while scrolling a phone. [whisper] Your catastrophe has been filed under "ongoing." And you're still inside it. You've never left.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this personality.

[gravely] Pain will take your personality.
[sadly] The person you spent a lifetime becoming — patient, kind, funny, generous — pain will take all of it. Strip it out day by day.

[angrily] You will become irritable. Demanding. Bitter. Angry.
[with guilt] You'll snap at the people who love you. Bark at your daughter for bringing the wrong cup. Snarl at your son for talking too loud. Push them away with both hands. [voice breaking] Hate yourself for it. But you can't stop.

[exhausted] Pain leaves no room for grace.
[whisper] When every nerve in your body is screaming, there is nothing left for kindness. Nothing left for patience. Nothing left for the person you used to be. [darkly] Pain is greedy. It takes everything and leaves you with someone you don't recognize.`
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
          notes: `[slowly] This regret will haunt me.
[darkly] Not as warning. Not as lesson.
As lived truth.

[gravely] Not fortune-cookie wisdom. Not motivational posters.
[haunted] Lived regret. The kind that comes at the end, when you can see everything clearly and can change nothing. When the view is perfect and the door is locked.

[whisper] Standing at the end with a clear view of everything you didn't do.
[pause] And no way back.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this life.

[reflectively] The trip you postponed. The book you never wrote. The words you never said.
[bitterly] "There's always tomorrow." You said it a thousand times. And you believed it a thousand times. And a thousand tomorrows passed while you waited.

[sadly] You will lie in bed cataloging missed opportunities.
[resigned] The business you didn't start. The country you didn't visit. The person you didn't call back. The conversation you avoided because it was too hard. Doors you walked past. Chances you were too afraid to take.

[gravely] And you will know, with terrible clarity: it's too late now.
[firmly] Not "nearly too late." Not "it's getting late." [whisper] Too late. Past tense. Finished. The window closed and you were standing outside it watching.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this conscience.

[haunted] The cruel words you said in anger. The trust you betrayed. The love you took for granted.
[softly] You'll remember every one. At 3 AM, their faces will find you. The exact look in their eyes when you cut them. You'll see it perfectly, even when you can't remember what you had for lunch.

[voice breaking] Some you can no longer apologize to. They're already gone.
[sadly] The words you should have said are stuck inside you permanently. There's no one to receive them. No grave hears confessions. No headstone offers forgiveness.

[resigned] Others wouldn't accept your apology anyway.
[gravely] Because you didn't just hurt them — you broke something. Trust. Love. Faith. Some things don't repair.

[whisper] You will carry this to the grave.
[darkly] Every face. Every wound. Every word you can't take back. [pause] They ride with you all the way to the end.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this awareness.

[reflectively] There was another version of you.
[softly] The one who took that risk. Who said yes instead of no. Who left the job. Who booked the ticket. Who made the call. Who didn't let fear decide.

[sadly] That person had a different life. Different loves. Different endings.
[resigned] Maybe better. Maybe worse. You'll never know. That's the thing — you'll never know. [whisper] The wondering is the wound.

[haunted] You will never know what could have been.
[hollowly] Only that it wasn't. The ghost of the life you didn't live will sit at the foot of your bed and look at you, and you'll look at it, [pause] and neither of you will speak because there's nothing left to say.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To these years.

[bitterly] The hours scrolling through nothing. The years in jobs you hated. The decades worrying about things that never happened.
[gravely] Add it up. Do the math. If you spent two hours a day on nothing — which is generous, it was probably more — that's thirty hours a week. Sixty thousand hours in a lifetime. [whisper] Seven years of your life. Wasted on nothing.

[sadly] You had time. So much time. And you spent it waiting.
[resigned] For the right moment. For enough money. For permission. For someone to tell you it was okay to begin. [flatly] Nobody came. Nobody was supposed to.

[haunted] Now the time is gone. And you're still waiting.
[hollowly] The pattern never broke. Even now, at the end, you're waiting for something. [whisper] You're waiting for death, the way you waited for everything else — passively, patiently, and too late.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
[darkly] To this throat.

[softly] You assumed they knew.
[gently] You showed it in other ways. You provided for them. You stayed. You sacrificed. You drove them to school and fixed their things and showed up every time they needed you. [resigned] Actions speak louder than words, right?

[voice breaking] But you didn't say it enough.
[sadly] How many times? Count them. How many times did you look your mother in the eyes and say "I love you"? Your father? Your child? Your partner? [whisper] Not enough. Never enough.

[haunted] Now some of them are gone. And the words sit unsaid in your throat.
[barely audible] Heavy. Useless. Too late. You say them now, to empty rooms, to photographs, to headstones. [whisper] They cannot hear you anymore. [pause] And the silence after you speak their name is the loudest thing you've ever heard.`
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
          notes: `[slowly] This loss of self will erase me.
[darkly] Not gradually. Not gently.
Piece by piece.

[gravely] Identity is built from pieces.
[reflectively] Roles. Abilities. Memories. Relationships. Each one can be removed. Each one will be removed. [haunted] And the question nobody can answer: what's left when enough pieces are gone? Is there a "you" underneath? Or were you only ever the pieces?

[whisper] You're about to find out.`
        },
        {
          id: 44,
          title: 'You will lose your roles',
          content: (
            <div style={{ textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Identity Stripped Away — Role by Role"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Was["Who You Were"]
        W1["💼 Worker"] --- W2["🏠 Provider"] --- W3["💪 Strong"]
    end
    subgraph Becomes["Who You Become"]
        B1["🪑 Retired"] --- B2["🤲 Needs providing for"] --- B3["🩹 Weak"]
    end
    subgraph Left["What Remains"]
        L1["❓ Who am I without them?"]
        L2["🔇 No answer."]
    end
    Was --> Becomes
    Becomes --> Left
    style Was fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Becomes fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000
    style Left fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000`}
                />
              </div>
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this identity.

[reflectively] You were a worker. Then you retired.
You were a provider. Then you needed providing for.
You were strong. Then you became weak.
[resigned] One by one, the things that defined you will be taken. Not stolen — just gone. Like leaves in autumn, except the tree doesn't grow new ones.

[hollowly] Your career. Your independence. Your usefulness.
[sadly] Gone. You will wonder who you are without them. This question will sit in front of you like a blank wall. You will stare at it for hours.

[whisper] And have no answer.
[darkly] Because maybe there isn't one. Maybe you were only ever what you did. [pause] And now you can't do anything.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this body.

[with disgust] Strangers will see you naked.
[flatly] Touch you in places only lovers were allowed. Discuss your body as if you're furniture. [coldly] "He needs to be turned." "She had an accident again." Spoken over your head, about your body, while you're right there.

[bitterly] You will be talked about in third person while you're in the room.
[resigned] As a patient. A case. A room number. They'll check your chart. They'll adjust your IV. [sadly] They'll never ask how you're feeling. Not really.

[hollowly] You will be a patient, a case, a room number. Not a person anymore.
[whisper] You had a name. A life. Stories. Accomplishments. Now you're the hip replacement in room 412. The incontinence case on floor three. [pause] The one who doesn't have visitors.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this life.

[flatly] Everything will be monitored.
[resigned] What you eat. When you sleep. When you use the bathroom. Whether you took your pills. Your life becomes a data set. A chart on the wall. A file in a system.

[bitterly] Doors will be opened without knocking.
[angrily] Belongings moved without asking. Decisions made without consulting you. Someone else decides when you eat, when you sleep, when you bathe. [hollowly] Your preferences aren't preferences anymore — they're notes in a file that nobody reads.

[sadly] You will have no secrets. No space that is yours alone.
[flatly] Even your thoughts get assessed. [mockingly] "How are we feeling today?" they ask, using "we" as if your suffering is a group project. [resigned] Using a smile that wants a simple answer. Fine. [whisper] You're fine. That's what they want to hear.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this authority.

[gravely] Not just your physical voice. Your authority. Your agency. Your say.
[resigned] The power to decide what happens to your own life — that power is being transferred, form by form, conversation by conversation, to other people.

[bitterly] Others will decide what's best for you.
[flatly] Where you live. What you eat. When you sleep. Your family, your doctor, well-meaning strangers who've known you for three weeks — all of them know better than you now. [angrily] Or so they've decided.

[hollowly] Your preferences will become suggestions. Then ignored entirely.
[sadly] Watch it happen. Watch your words go from commands to requests to preferences to background noise. [whisper] You're still speaking. But no one is listening. [pause] You've become advisory to your own existence.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this person.

[reflectively] You will look at old photos and wonder: Who was that person?
[softly] So full of energy. So full of plans. So full of life. Smiling at the camera like the future was infinite. So sure of themselves. [whisper] So alive.

[sadly] You will not feel connected to them.
[hollowly] It will seem like someone else's story. Someone else's wedding. Someone else's children. The gap between who you were and who you are is so vast that the old photos feel like fiction.

[gravely] The person you were is already dead.
[flatly] Dead in the sense that they no longer exist. The young you. The strong you. The ambitious you. All gone. They died quietly, one by one, over decades.

[whisper] Only the husk remains.
[haunted] And the husk looks at old photos and tries to feel something. Anything. A connection, a continuity, a thread that ties the old face to the new. [pause] There's nothing there.`
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
          notes: `[slowly] This ending will claim me.
[darkly] Not as abstract. Not later.
[firmly] Now. Always now.

[gravely] Death is not a future event.
[haunted] It's a present process. Every moment is a moment closer. There is no "later" — only endless "now," and death inhabits every now. [whisper] It was always here.

[measured] The loss of self is complete.
[darkly] Now we face the end itself. Not the process. [pause] The end.`
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
          notes: `[slowly] This is happening to me.
Not in theory.
Not someday.
[urgently] Right now.

[darkly] Every breath is one less you'll take.
[haunted] The one you just took — gone. Added to the count. Subtracted from the total. Every heartbeat is a countdown. Every moment passes and will not return. [whisper] Ever.

[clinically] The cells in your body are dying right now.
[gravely] Your telomeres are shortening. Your DNA is degrading. Right now. As you sit here. The machinery of your own destruction is running at this very second, has been running since the moment you were born.

[firmly] You are not moving toward death. You are death in progress.
[darkly] A slow-motion decay that started at birth. You didn't begin to die at some point. [whisper] You were born dying. Every candle on every birthday cake was a marker on the countdown.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[bitterly] To this illusion of readiness.

[gravely] You cannot practice dying.
[reflectively] You can think about it. Plan for it. Meditate on it. Read books about it. Accept it philosophically over a glass of wine with candles lit. [firmly] But that's not dying. That's talking about dying.

[fearfully] When it comes — when you feel your body shutting down — when the darkness closes in —
[gravely] All your preparation will mean nothing. The books won't help. The meditation won't help. The philosophy won't help. [voice breaking] You will be as terrified as a child in the dark.

[darkly] You will be as afraid as anyone ever was.
[whisper] The philosopher dies as frightened as the fool. There are no experts in dying. Everyone is a beginner. [pause] And there is no second attempt.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this mind.

[reflectively] You imagine you'll think profound things.
[softly] Review your life. Find meaning in the suffering. Achieve closure. Make peace. Speak some final words that give your children strength.

[firmly] But you won't.
[flatly] The body doesn't care about your existential closure. It wants warmth. It wants water. It wants to stop hurting. It will occupy every last shred of your consciousness with its animal demands.

[bitterly] Your last thought will probably be: "I'm cold."
[resigned] Or "I'm thirsty." Or "It hurts." Not "I understand now." Not "I forgive everyone." Not "It was all worth it." [whisper] Just the body making its final, desperate, mundane request.

[barely audible] Or nothing at all.
[softly] Just a quiet dimming. Like a television turning off. No final thought. No grand revelation. [pause] Just gone.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this consciousness.

[gravely] Your thoughts will cease. Your awareness will end. You will not exist.
[firmly] Not sleeping. Not dreaming. Not floating. Not watching from above. Not anything. [haunted] The "you" that is processing these words — that awareness, that spark — will be gone. Completely. Permanently.

[softly] The you reading this will be erased. As if it never was.
[sadly] Every memory. Every skill you learned. Every person you loved. Every sunrise you saw. Every laugh, every cry, every breath — all of it, gone. [whisper] Not stored somewhere. Not preserved. Gone.

[darkly] There will be no you to know it.
[haunted] And that's the part your brain can't process. You try to imagine not existing and you picture yourself observing the nothing. [firmly] But there's no observer. There's nobody. [whisper] There's just... nothing. [pause] Forever.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this world without me.

[flatly] The sun will rise the day you die. And every day after.
[resigned] It won't pause. It won't dim. It won't acknowledge in any way that you're gone. It will just rise, the way it rose four and a half billion years before you existed.

[softly] People will eat breakfast. Go to work. Laugh at jokes. Fall in love.
[reflectively] On the day they lower you into the ground, somewhere a couple will have their first kiss. Someone will learn to ride a bike. A baby will be born. [sadly] The world doesn't stop for funerals.

[gravely] Because to the world, you don't matter.
[firmly] That's not cruelty. That's scale. Eight billion people. One gone. [whisper] The math doesn't flinch.

[pause] [barely audible] And soon, no one will remember you did.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this name.

[softly] Your children will remember you.
[gently] Vividly. They'll hear your voice in their heads. See your face when they close their eyes. [voice breaking] Miss you so hard it bends them double.

[resigned] Then your grandchildren will remember stories about you.
[sadly] Second-hand memories. "Your grandfather used to say..." They'll know facts about you, not you. Your laugh, your smell, the way your hand felt — gone. Reduced to anecdotes at dinner tables.

[hollowly] Then their children will not remember you at all.
[flatly] Three generations. Maybe four. Then your name will be spoken for the last time. By someone who never knew you. Who gets the details wrong. [whisper] And after that — never again.

[barely audible] As if you never existed at all.`
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
          notes: `[slowly] This will happen to me.
Not in theory.
Not someday.
[darkly] To this certainty.

[gravely] No amount of money will save you.
[firmly] No achievement will exempt you. No belief will rescue you. The richest person who ever lived is dead. The most powerful person who ever lived is dead. The most beloved person who ever lived is dead.

[darkly] You cannot negotiate with death. You cannot bargain. You cannot cheat.
[flatly] Every workaround, every loophole, every escape route you can think of — tried. By millions. By billions. None worked. [whisper] Not one. Not ever.

[firmly] You will die. [pause] And you know it.
[haunted] You've known since childhood. The first time you understood the word "forever." The first time someone didn't come back. [whisper] You've carried this knowledge your entire life. And it hasn't helped at all.`
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
          notes: `[firmly] Don't distract yourself.
Don't rationalize.
Don't look away.

[darkly] Don't reach for your phone. Don't start planning dinner. Don't think about work. [slowly] Stay here. In this feeling. This is the only honest moment you've had in weeks.

[gravely] This will happen to you. To this body. This mind. This awareness reading these words.
[firmly] Not to someone else. Not later. [pause] To you.

[slowly] You will die.

[softly] Now what?
[reflectively] What will you do with the time that's left? Not the time you think you have — the time you actually have. [whisper] Which is less than you think. Always less than you think.

[pause] [gently] What will you do now?`        }
      ]
    }
  ]
};