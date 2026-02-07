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
          notes: `This will happen to me.
Not in theory. Not someday. To this body.

Not humanity in general. Not a philosophical thought experiment.
This body. These hands. These lungs. This heartbeat.

Every person who has ever lived has died. Every single one.
I am not the exception. There is no exception.

The comfortable distance I keep between myself and death — that's a lie I tell myself to get through the day.
It doesn't change anything.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this body.

The body will fail — not heroically.
Not in some dramatic cinematic moment. In small, humiliating ways nobody warns you about.

One day, your words will not come out right.
Picture it — you're trying to tell your daughter something important. The thought is crystal clear in your mind. But your tongue won't cooperate. The word sits right there, you can almost taste it, and it won't come out.

You will know exactly what you want to say — and your mouth will not obey.
So people jump in. They finish your sentences. They get it wrong. They tell you what you meant. And you just nod, because fighting it takes more energy than you have left.

You will be corrected about your own intentions.
By the people who love you most. And you'll let them, because correcting them hurts more than being misunderstood.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this body.

Control will leave before life does.
Your body will stop asking permission.

At some point, your body will release waste without asking you.
Not once, as some terrible accident. As routine. Tuesday. Thursday. Saturday. Every time someone has to clean you.

You won't feel dramatic sorrow.
You'll feel your face burn with shame. You'll apologize. Over and over. To the nurse, to your daughter, to your son. For something you can't control. For existing in a body that has already quit on you.

The worst part isn't the mess.
It's knowing you used to be someone who took care of others. And now you can't take care of yourself.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this face.

Your face will become unfamiliar.
You will catch your reflection and for a split second wonder who that old person is. Then it hits you.

Not metaphorically. Literally.
Your brain still pictures you at thirty-five. Full of energy. Sharp jaw. Clear eyes. Then a mirror ambushes you in a store window and you see someone your parents' age staring back. Except it's you.

Sometimes you'll forget you're old. Then catch your reflection. And remember.
Like being told terrible news for the first time, every time. You never get used to it. The shock resets overnight. You wake up feeling like yourself, and then the mirror tells you the truth again.

Each time will feel like the first time.
That's the cruelty — your brain refuses to update the file.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this body.

Pain will become your weather.
Not a storm that passes. The sky itself. Always there. The background to everything you do.

You will wake up in pain.
Before your eyes open, before any thought forms, pain is there first. Waiting. It slept with you. It will have breakfast with you. It will sit beside you for every hour of every day, and it will never leave.

You will become an expert in types of ache.
Sharp — that's the hip. Dull — that's the lower back. Throbbing — the knees. Constant — everywhere. You'll describe it to doctors so many times the words lose all meaning.

It will bore you before it kills you.
That's the thing no one tells you. Pain gets tedious. The same suffering, the same complaints, the same helplessness, day after day. Even agony becomes monotonous.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this mind.

Your mind will betray you quietly.
Not with a dramatic collapse. With small, creeping thefts you barely notice until the damage is done.

You will forget the word for common things.
You'll point at the toaster and say "the thing." You'll call your son by your brother's name. You'll do it and not even realize.

You will tell the same story three times in one hour.
And people will smile patiently, the way you smile at a child. Each time will feel like the first. They'll exchange glances. You won't notice. That's the mercy and the horror — you don't know you're fading.

The you that remembers will fade before the you that exists.
Your body will keep going. Your heart will keep beating. But the thread that connects who you were yesterday to who you are today will snap. And you won't even know it snapped.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this life.

You will become a burden.
Not because they say so. Because you'll see it in their eyes before they can hide it.

You will need help getting dressed.
Buttons your fingers can't manage. Shoes you can't reach. The flicker of frustration on their face as they kneel down to help — they'll mask it with a smile, but you'll catch it. You'll always catch it.

You will hear them sigh when they think you can't hear.
They're exhausted. They have their own lives. Their own children needing them. And here you are — another obligation, another task, another thing they have to do before they can live their day.

You will apologize for existing. For needing. For still being here.
And you will mean it. Not as a gesture. You will genuinely wish you could disappear, that you could stop being a weight on the people you love most in this world.`
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
          notes: `This decay will claim me.
Not in fantasy. Not eventually.
To these bones and flesh.

The previous horror was about experience — what it feels like to lose agency, to lose your mind, to become a burden.

Now we enter the body itself.
The actual physical machinery failing. Skin tearing. Bones cracking. Heart stuttering. Eyes dimming. Teeth falling.

This is what decomposition looks like while you're still alive.
The body doesn't wait until you die to begin falling apart. It starts early and picks up speed.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this skin.

Your skin will become thin as tissue paper.
Run your finger across the back of your hand right now. Feel that? That elasticity? That bounce? It won't be there. Pull the skin up — someday it will stay where you left it. Tent up. Take minutes to settle back down. Like a science experiment you're performing on yourself.

A simple bump will tear it open.
Hit your arm on a doorframe — it splits. Blood pools under skin so thin you can see it spreading. Purple and blue like spilled ink. Wounds will refuse to heal. The bandage comes off and the tear is still there, angry and raw, week after week.

Your hands will show every vein.
A roadmap drawn in purple and blue, running under translucent skin. These are your hands. The ones that held children, that built things, that touched the people you loved. Now they look like they belong to a corpse.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To these bones.

Your bones will hollow and crack.
They'll become porous, light, fragile — like honeycomb. The frame that held you upright for decades will turn against you.

You will break a rib from coughing. A hip from standing. A vertebra from sitting wrong.
That's not exaggeration. That's osteoporosis. A cough. A chair. Standing up from bed. These aren't accidents — these are just existing. Your skeleton can't handle the weight of ordinary life anymore.

Each fracture will heal slower than the last. If it heals at all.
And while you lie in bed waiting, the muscles waste away, the pneumonia sets in, the blood clots form. One broken bone starts a chain reaction that doesn't stop.

The body you stand in will collapse inward.
You will shrink. Your spine will curve. You will become physically smaller, folding in on yourself like a building being demolished in slow motion.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this heart.

Your heart will strain and stutter.
The engine that never stopped, not once, since before you were born — it's wearing out. And you'll feel it.

You will feel it skip beats. Race for no reason. Pause for too long.
Lying in bed at night, you'll feel it — that flutter, that missed beat, that extra-hard thump that makes you hold your breath. Is this it? Is this the one? Then it settles. Until next time.

Walking to the bathroom will exhaust you.
Fifteen feet. That's all. And halfway there you'll need to sit down, chest heaving, arms shaking, wondering how something so small became so impossible.

Then be disappointed it wasn't.
At some point, the skipped beat won't scare you anymore. It'll feel like a promise that keeps getting broken. You'll welcome it. And that's when you know something inside you has already died.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To these organs.

Your organs will fail in sequence.
Not all at once. Like dominoes. One fails, stresses the next, which stresses the next. A cascade.

Your kidneys will filter less. Your liver will process slower. Your lungs will capture less oxygen.
Toxins build up in your blood. You taste metal at the back of your throat. Your breath smells like something rotting — because something is. You are. From the inside.

Your body will retain fluid. Your ankles will swell. Your belly will distend.
The body filling up with what it can no longer process. Carrying its own poison, expanding with it.

You will look pregnant with your own death.
That's not metaphor. That's what end-stage organ failure looks like. Swollen, distended, bloated with the waste your body can no longer expel. Growing something that will kill you.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To these muscles.

Your muscles will consume themselves for fuel.
Your body, starving for energy, will eat its own meat. Your arms will thin until the bones show through. Your legs will barely hold you upright. Your hands will tremble from the effort of holding a cup of tea.

You will drop things. Spill things. Break things.
The glass slips. The plate crashes. The book falls from fingers that can no longer grip. Every object in the world becomes a test you're failing.

People will start cutting your food for you.
Someone at the table will lean over and cut your steak into small pieces. The way you once did for your children. The reversal is so complete it's almost poetic. Almost.

Then feeding you.
Spoon to your lips. Wiping the spill from your chin. You end the way you began — dependent, helpless, and unable to do the most basic thing a human being can do for themselves.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To these eyes.

Your world will become blurry, then dark.
The world you've spent your entire life looking at — it's going to leave you. Not all at once. The edges go first.

Colors will fade to gray. Faces will become shadows.
Imagine your daughter walks into the room. You hear her voice. You know it's her. But you can't see her face. Just a shape in the doorway. A blur where features used to be.

Reading will become impossible. Then recognizing faces.
Books — gone. Newspapers — gone. The faces of people you love — gone. You will live among strangers you recognize only by their voices. Your world reduced to sound and touch.

Then light itself will go.
The last thing to leave. Not sight, not detail, not color — light. The world will simply go dark. And it won't come back.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To these teeth.

Your gums will recede and bleed.
They pull back from your teeth like tide going out. The bone underneath dissolves. Your teeth, untethered, begin to move.

Your teeth will wiggle when you touch them. Then fall out one by one.
You'll find them in your food. Bite into an apple and leave a tooth behind. Find one on your pillow in the morning. Cough into your hand and see a tooth sitting there, root and all, like it was never attached to you.

Your face will collapse inward.
Without teeth, the jaw shrinks. The lips fold in. The chin meets the nose. The structural architecture of your face caves. You look in the mirror and see the skull underneath, barely disguised.

You will smile and look like a corpse.
That's not cruelty — that's anatomy. Your face is already previewing what death will look like. Every smile is a rehearsal.`
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
          notes: `This isolation will hollow me.
Not as metaphor. Not as possibility.
In lived experience.

The body fails, yes — that's horrifying enough.
But the world around you fails too. People leave. People die. The circles of connection that gave life meaning shrink until there's nothing left but silence.

There's a death before death.
Social death. The death of connection. The death of being seen, known, needed by anyone. It comes first. The body just catches up later.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this heart.

You will attend funeral after funeral.
Not one grief. Not two. A procession. The people who made your life — leaving, one by one. Friends. Siblings. Colleagues. Lovers. And if you're cursed with enough years — your own children.

Each death will take a piece of your history.
The inside jokes die with them. The shared memories — that trip, that night, that look you gave each other across the room — gone. No one else was there. No one else remembers. You become the sole witness to a life no one can verify.

Then you will forget them too.
The last keeper of the memories loses the memories. The faces blur. The voices fade. The stories scramble. And there's no one left to remind you what you've lost. No one left at all.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
In this lived life.

People will visit less and less.
At first, they come often. They bring flowers. They stay for hours. Then once a week. Then once a month. Then on Christmas if you're lucky. Then not at all.

You will understand. They have lives.
Responsibilities. Children. Jobs. You are no longer the center of anyone's world. You're an item on a checklist, squeezed between groceries and dentist appointments. They love you. But love doesn't mean presence.

You will wait by the phone for calls that don't come.
Sitting in the chair, glancing at the phone, willing it to ring. It doesn't. And you won't blame them. But you will notice. God, you will notice every empty hour.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
In this silence.

Days will pass without another voice.
Not a day. Days. The last person you spoke to was the pharmacist, three days ago. Before that, nobody. After that, nobody.

You will narrate your actions to the empty room.
"Now I'll make tea." "Time for lunch." "Where did I put that?" You'll answer yourself. Have full conversations alone. Not because you're losing your mind — because the silence is unbearable.

You will forget what your voice sounds like to others.
Because there are no others. No one to respond. No one to say your name. No one to confirm you're still real. You become a ghost haunting your own house, talking to walls that don't answer back.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this existence.

The world will forget you exist.
Your emails go unanswered. Your calls unreturned. Not out of cruelty — out of irrelevance. You simply don't register anymore.

Your opinions will be dismissed as outdated. Your stories as repetitive. Your presence as optional.
You've been filed away. The world moved on while you were still in it.

You could die tomorrow and most people wouldn't know for weeks.
Sit with that. Really sit with it. The mail would pile up. The milk would expire. The phone would ring into nothing. Weeks. Maybe months. And life would continue exactly as it does now, without a single ripple.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this person.

People will look through you in public.
Not at you. Through you. Like glass. Like you've already become part of the background.

Waiters will serve you last. Store clerks will ignore you. Young people will talk over you.
You'll stand in line and be skipped. You'll raise your hand and not be called on. You'll speak and people will not hear you. Your words fall out of your mouth and dissolve before they reach anyone.

You will wonder if you've already died and no one told you.
And it won't feel like a joke. It will feel like a genuine question. When no one sees you, when no one responds, what proof do you have that you still exist?`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
In this bed.

The bed will be too big. Too cold. Too quiet.
You'll lie on your side, the way you always did, and there's nothing behind you but empty space. Cold sheets. No warmth. No breathing. No weight beside you.

You will reach out in the night for someone who isn't there.
It's a reflex. Decades of reaching. Your arm moves before your brain remembers. Then your hand lands on nothing, and you remember. Again.

You will wake up and forget they're gone. Then remember. Every single morning.
Sleep resets the grief. For those few groggy seconds, everything is normal. Then reality floods in. They're gone. Every morning is the morning after they died.

You will talk to their photo. It will not answer.
You'll say goodnight. You'll tell them about your day. You'll ask what they think. And the silence that follows will be the loneliest sound in the world.`
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
          notes: `This terror will find me.
Not in nightmares. Not theoretically.
In the darkness at 3 AM.

3 AM is when it comes.
The house is silent. The darkness is thick. And your mind starts its work. Every fear you pushed down during the day climbs out and sits on your chest.

Falling. Dying alone. Hospitals. Forgetting. Being a burden. Pain.
These aren't abstract concerns. These are the things that wake people at night, that they never admit to their families, that they carry alone in the dark.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To these legs.

Every step will be a calculation.
Look down. Is the floor wet? Is the rug loose? Is the step even? Your entire world becomes a risk assessment. Every surface, every threshold, every stair is a potential ending.

You will grip railings with white knuckles. Shuffle instead of walk.
You'll refuse dinner invitations because of stairs. Cancel plans because it rained and the sidewalk might be slick. Your life will shrink to the few safe paths you've memorized. Freedom traded for survival.

You will know that one fall could be the last.
A broken hip means bedridden. Bedridden means pneumonia. Pneumonia means death. That's not paranoia — that's a 20-30% one-year mortality rate for elderly hip fractures. One stumble. One wet floor. One uneven step. That's all it takes.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
In this apartment.

You will imagine the scenarios.
Falling in the bathroom. Face down on cold tile. Hip shattered. Unable to reach the phone. Lying there for hours. Days. Choking on dinner with no one to grab you from behind. The heart attack at 2 AM — gasping in the dark, alone.

You will keep your phone charged at all times.
Within reach. Always. But you'll wonder — when the moment comes, when the pain hits, when the world goes sideways — will your hands work? Will you be able to dial? Will you be able to speak?

You will see the news stories. Elderly person found dead after three days.
Found by a neighbor who noticed the mail. Found by a landlord who smelled something. Found by a daughter who finally thought to check. And you will know, with absolute certainty, that could be you.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
In that building.

You will know that going in doesn't mean coming out.
Every ambulance ride could be the last trip you take. Every hospital bed could be the last bed you sleep in. You've seen too many people — friends, siblings, your own parents — go in for something simple and never come home.

You will resist calling the ambulance. Downplay symptoms.
"I'll be fine." You'll say this with chest pain. You'll say this barely breathing. Because the hospital is where they take your clothes, your dignity, your autonomy — and sometimes your life.

You will pack a bag "just in case."
Leave notes on the counter. Put your affairs in order. Treat every hospital visit like a potential farewell. And the sentence you try to write — "If I don't come back..." — you can't finish it. Your hand stops. Your mind won't let you.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this brain.

Every memory lapse will terrify you.
You forgot where you put your keys. Normal? Or is it starting? You blanked on a word mid-sentence. Everyone does that. Right? Right?

You will test yourself constantly.
What day is it? Wednesday. Good. What did I eat for breakfast? Eggs. Good. What's my daughter's name? ... The pause. That pause. Even if the answer comes a second later, the pause is the thing that haunts you.

You will fear becoming a stranger to yourself.
Losing your memories. Your personality. Your self. The person you spent a lifetime becoming — erased. And the worst part: still being alive when it's all gone. A breathing body with no one inside.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this conscience.

This fear will consume you more than death itself.
You can make peace with dying. What you can't make peace with is ruining your children's lives in the process.

You will hide how much you're struggling.
Pretend you can manage. Refuse help until you absolutely can't. Because the moment you accept help is the moment you become a project. A responsibility. A weight.

You will calculate the cost of your care.
Your children's inheritance disappearing. Their vacation cancelled because of you. Their careers stalled. Their marriages strained. The math is brutal and it runs in your head all day.

You will think about how much easier it would be for everyone if you just—
You will think it often. Not as a dark impulse. As basic arithmetic.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this body.

You will wonder which kind of death awaits you.
Slow and painful? Fast but terrifying? Peaceful but lonely? There's no menu. No choice. It will come however it comes.

You will pray for quick. Hope for painless. Fear neither will come.
Because you've seen how it usually goes. You've seen the morphine drip, the glazed eyes, the labored breathing that goes on for days. You've stood at bedsides and watched people you love suffer through the exit.

You will have watched others die. Seen the fear in their eyes.
Not movie fear. Real fear. Animal fear. The kind that strips away everything — dignity, composure, faith — and leaves only the raw, screaming desire to not stop existing.

And you will know those eyes will be yours.`
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
          notes: `This pain will consume me.
Not hypothetically. Not far off.
In this suffering vessel.

The body is a container for pain.
It stops being yours and becomes something you're trapped inside. A cage made of nerve endings, every one of them firing.

The previous sections talked about fear.
This section is what the fear was about. Not the anticipation of suffering — the living inside of it. The difference is everything.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this body.

You will wake up in pain. You will go to sleep in pain. You will dream of pain.
There is no escape. No position that brings relief. No pillow arrangement. No medication that truly works. You will shift in bed fifty times a night, trying to find a way to exist that doesn't hurt. There isn't one.

You will forget what it felt like to simply exist without hurting.
Try to remember a time before pain. You can't. It's been so long the memory of comfort is gone. Pain has overwritten everything. It's not the exception anymore.

It's the norm.
Your best days aren't pain-free. They're just less. A four instead of a seven. And you're grateful for a four. That's what your life has become — gratitude for slightly less agony.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this voice.

There will be moments when the pain is so intense you will beg.
To God — if you believe. To nurses — if they're there. To anyone who will listen. To no one. To the empty ceiling above your bed, because you've run out of people to ask.

You will say "please" until it loses meaning.
You will cry until there are no tears left. Your voice will break from screaming. And none of it — not one word, not one tear, not one scream — will make any difference at all.

And the pain will continue. Indifferent to your suffering.
Pain doesn't have ears. It doesn't negotiate. It doesn't care how good a person you were, how much you've already endured, how little you deserve this. It just is. Relentless. Mechanical. Indifferent.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
In this exhaustion.

There will come a point when death seems merciful.
When another day feels like a sentence — not a gift, a sentence. When morning light brings dread instead of hope. When someone says "You'll get better" and it sounds like the cruelest thing anyone has ever said to you.

You will understand why people give up.
Not from weakness. From exhaustion. There's a difference. Weakness breaks quickly. Exhaustion is what happens when strength runs out over months, over years, one impossible day at a time.

The will to live is not infinite.
We treat it like some sacred, bottomless well. It isn't. Pain is patient. Pain has all the time in the world. And your will to live has an expiration date. Pain will find it.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
In this isolation.

People will say they understand. They don't. They can't.
They can see your face twist. They can hear you moan. They can hold your hand and cry with you. But they will never feel what you feel. Not even close.

You are alone in your pain.
Trapped in a body that only you inhabit. Your nervous system is a locked room. Others can press their faces against the window. They can see you suffering. But they can't come inside. No one can.

No one can take it from you. No one can share it.
This is the loneliest truth there is. Your suffering is yours. Completely, utterly, irrevocably yours. And you will bear it alone because there is no other option.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this agony.

At first, people will be alarmed by your pain.
They'll rush in. Adjust your pillows. Call the doctor. Stay late. Hold your hand through the night. They'll treat it like the emergency it is.

But pain that doesn't end becomes background noise.
They'll grow tired. Not of you — of the situation. They have their own lives to live. Their own exhaustion. The initial crisis fades into routine. Your screams become the furniture of the room — always there, no longer noticed.

Your agony will become routine.
The same pain that once made everyone drop everything now gets a "How's the pain today?" asked while scrolling a phone. Your catastrophe has been filed under "ongoing." And you're still inside it. You've never left.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this personality.

Pain will take your personality.
The person you spent a lifetime becoming — patient, kind, funny, generous — pain will take all of it. Strip it out day by day.

You will become irritable. Demanding. Bitter. Angry.
You'll snap at the people who love you. Bark at your daughter for bringing the wrong cup. Snarl at your son for talking too loud. Push them away with both hands. Hate yourself for it. But you can't stop.

Pain leaves no room for grace.
When every nerve in your body is screaming, there is nothing left for kindness. Nothing left for patience. Nothing left for the person you used to be. Pain is greedy. It takes everything and leaves you with someone you don't recognize.`
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
          notes: `This regret will haunt me.
Not as warning. Not as lesson.
As lived truth.

Not fortune-cookie wisdom. Not motivational posters.
Lived regret. The kind that comes at the end, when you can see everything clearly and can change nothing. When the view is perfect and the door is locked.

Standing at the end with a clear view of everything you didn't do.
And no way back.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this life.

The trip you postponed. The book you never wrote. The words you never said.
"There's always tomorrow." You said it a thousand times. And you believed it a thousand times. And a thousand tomorrows passed while you waited.

You will lie in bed cataloging missed opportunities.
The business you didn't start. The country you didn't visit. The person you didn't call back. The conversation you avoided because it was too hard. Doors you walked past. Chances you were too afraid to take.

And you will know, with terrible clarity: it's too late now.
Not "nearly too late." Not "it's getting late." Too late. Past tense. Finished. The window closed and you were standing outside it watching.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this conscience.

The cruel words you said in anger. The trust you betrayed. The love you took for granted.
You'll remember every one. At 3 AM, their faces will find you. The exact look in their eyes when you cut them. You'll see it perfectly, even when you can't remember what you had for lunch.

Some you can no longer apologize to. They're already gone.
The words you should have said are stuck inside you permanently. There's no one to receive them. No grave hears confessions. No headstone offers forgiveness.

Others wouldn't accept your apology anyway.
Because you didn't just hurt them — you broke something. Trust. Love. Faith. Some things don't repair.

You will carry this to the grave.
Every face. Every wound. Every word you can't take back. They ride with you all the way to the end.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this awareness.

There was another version of you.
The one who took that risk. Who said yes instead of no. Who left the job. Who booked the ticket. Who made the call. Who didn't let fear decide.

That person had a different life. Different loves. Different endings.
Maybe better. Maybe worse. You'll never know. That's the thing — you'll never know. The wondering is the wound.

You will never know what could have been.
Only that it wasn't. The ghost of the life you didn't live will sit at the foot of your bed and look at you, and you'll look at it, and neither of you will speak because there's nothing left to say.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To these years.

The hours scrolling through nothing. The years in jobs you hated. The decades worrying about things that never happened.
Add it up. Do the math. If you spent two hours a day on nothing — which is generous, it was probably more — that's thirty hours a week. Sixty thousand hours in a lifetime. Seven years of your life. Wasted on nothing.

You had time. So much time. And you spent it waiting.
For the right moment. For enough money. For permission. For someone to tell you it was okay to begin. Nobody came. Nobody was supposed to.

Now the time is gone. And you're still waiting.
The pattern never broke. Even now, at the end, you're waiting for something. You're waiting for death, the way you waited for everything else — passively, patiently, and too late.`
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
To this throat.

You assumed they knew.
You showed it in other ways. You provided for them. You stayed. You sacrificed. You drove them to school and fixed their things and showed up every time they needed you. Actions speak louder than words, right?

But you didn't say it enough.
How many times? Count them. How many times did you look your mother in the eyes and say "I love you"? Your father? Your child? Your partner? Not enough. Never enough.

Now some of them are gone. And the words sit unsaid in your throat.
Heavy. Useless. Too late. You say them now, to empty rooms, to photographs, to headstones. They cannot hear you anymore. And the silence after you speak their name is the loudest thing you've ever heard.`
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
          notes: `This loss of self will erase me.
Not gradually. Not gently.
Piece by piece.

Identity is built from pieces.
Roles. Abilities. Memories. Relationships. Each one can be removed. Each one will be removed. And the question nobody can answer: what's left when enough pieces are gone? Is there a "you" underneath? Or were you only ever the pieces?

You're about to find out.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this identity.

You were a worker. Then you retired.
You were a provider. Then you needed providing for.
You were strong. Then you became weak.
One by one, the things that defined you will be taken. Not stolen — just gone. Like leaves in autumn, except the tree doesn't grow new ones.

Your career. Your independence. Your usefulness.
Gone. You will wonder who you are without them. This question will sit in front of you like a blank wall. You will stare at it for hours.

And have no answer.
Because maybe there isn't one. Maybe you were only ever what you did. And now you can't do anything.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this body.

Strangers will see you naked.
Touch you in places only lovers were allowed. Discuss your body as if you're furniture. "He needs to be turned." "She had an accident again." Spoken over your head, about your body, while you're right there.

You will be talked about in third person while you're in the room.
As a patient. A case. A room number. They'll check your chart. They'll adjust your IV. They'll never ask how you're feeling. Not really.

You will be a patient, a case, a room number. Not a person anymore.
You had a name. A life. Stories. Accomplishments. Now you're the hip replacement in room 412. The incontinence case on floor three. The one who doesn't have visitors.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this life.

Everything will be monitored.
What you eat. When you sleep. When you use the bathroom. Whether you took your pills. Your life becomes a data set. A chart on the wall. A file in a system.

Doors will be opened without knocking.
Belongings moved without asking. Decisions made without consulting you. Someone else decides when you eat, when you sleep, when you bathe. Your preferences aren't preferences anymore — they're notes in a file that nobody reads.

You will have no secrets. No space that is yours alone.
Even your thoughts get assessed. "How are we feeling today?" they ask, using "we" as if your suffering is a group project. Using a smile that wants a simple answer. Fine. You're fine. That's what they want to hear.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this authority.

Not just your physical voice. Your authority. Your agency. Your say.
The power to decide what happens to your own life — that power is being transferred, form by form, conversation by conversation, to other people.

Others will decide what's best for you.
Where you live. What you eat. When you sleep. Your family, your doctor, well-meaning strangers who've known you for three weeks — all of them know better than you now. Or so they've decided.

Your preferences will become suggestions. Then ignored entirely.
Watch it happen. Watch your words go from commands to requests to preferences to background noise. You're still speaking. But no one is listening. You've become advisory to your own existence.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this person.

You will look at old photos and wonder: Who was that person?
So full of energy. So full of plans. So full of life. Smiling at the camera like the future was infinite. So sure of themselves. So alive.

You will not feel connected to them.
It will seem like someone else's story. Someone else's wedding. Someone else's children. The gap between who you were and who you are is so vast that the old photos feel like fiction.

The person you were is already dead.
Dead in the sense that they no longer exist. The young you. The strong you. The ambitious you. All gone. They died quietly, one by one, over decades.

Only the husk remains.
And the husk looks at old photos and tries to feel something. Anything. A connection, a continuity, a thread that ties the old face to the new. There's nothing there.`
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
          notes: `This ending will claim me.
Not as abstract. Not later.
Now. Always now.

Death is not a future event.
It's a present process. Every moment is a moment closer. There is no "later" — only endless "now," and death inhabits every now. It was always here.

The loss of self is complete.
Now we face the end itself. Not the process. The end.`
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
          notes: `This is happening to me.
Not in theory.
Not someday.
Right now.

Every breath is one less you'll take.
The one you just took — gone. Added to the count. Subtracted from the total. Every heartbeat is a countdown. Every moment passes and will not return. Ever.

The cells in your body are dying right now.
Your telomeres are shortening. Your DNA is degrading. Right now. As you sit here. The machinery of your own destruction is running at this very second, has been running since the moment you were born.

You are not moving toward death. You are death in progress.
A slow-motion decay that started at birth. You didn't begin to die at some point. You were born dying. Every candle on every birthday cake was a marker on the countdown.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this illusion of readiness.

You cannot practice dying.
You can think about it. Plan for it. Meditate on it. Read books about it. Accept it philosophically over a glass of wine with candles lit. But that's not dying. That's talking about dying.

When it comes — when you feel your body shutting down — when the darkness closes in —
All your preparation will mean nothing. The books won't help. The meditation won't help. The philosophy won't help. You will be as terrified as a child in the dark.

You will be as afraid as anyone ever was.
The philosopher dies as frightened as the fool. There are no experts in dying. Everyone is a beginner. And there is no second attempt.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this mind.

You imagine you'll think profound things.
Review your life. Find meaning in the suffering. Achieve closure. Make peace. Speak some final words that give your children strength.

But you won't.
The body doesn't care about your existential closure. It wants warmth. It wants water. It wants to stop hurting. It will occupy every last shred of your consciousness with its animal demands.

Your last thought will probably be: "I'm cold."
Or "I'm thirsty." Or "It hurts." Not "I understand now." Not "I forgive everyone." Not "It was all worth it." Just the body making its final, desperate, mundane request.

Or nothing at all.
Just a quiet dimming. Like a television turning off. No final thought. No grand revelation. Just gone.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this consciousness.

Your thoughts will cease. Your awareness will end. You will not exist.
Not sleeping. Not dreaming. Not floating. Not watching from above. Not anything. The "you" that is processing these words — that awareness, that spark — will be gone. Completely. Permanently.

The you reading this will be erased. As if it never was.
Every memory. Every skill you learned. Every person you loved. Every sunrise you saw. Every laugh, every cry, every breath — all of it, gone. Not stored somewhere. Not preserved. Gone.

There will be no you to know it.
And that's the part your brain can't process. You try to imagine not existing and you picture yourself observing the nothing. But there's no observer. There's nobody. There's just... nothing. Forever.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this world without me.

The sun will rise the day you die. And every day after.
It won't pause. It won't dim. It won't acknowledge in any way that you're gone. It will just rise, the way it rose four and a half billion years before you existed.

People will eat breakfast. Go to work. Laugh at jokes. Fall in love.
On the day they lower you into the ground, somewhere a couple will have their first kiss. Someone will learn to ride a bike. A baby will be born. The world doesn't stop for funerals.

Because to the world, you don't matter.
That's not cruelty. That's scale. Eight billion people. One gone. The math doesn't flinch.

And soon, no one will remember you did.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this name.

Your children will remember you.
Vividly. They'll hear your voice in their heads. See your face when they close their eyes. Miss you so hard it bends them double.

Then your grandchildren will remember stories about you.
Second-hand memories. "Your grandfather used to say..." They'll know facts about you, not you. Your laugh, your smell, the way your hand felt — gone. Reduced to anecdotes at dinner tables.

Then their children will not remember you at all.
Three generations. Maybe four. Then your name will be spoken for the last time. By someone who never knew you. Who gets the details wrong. And after that — never again.

As if you never existed at all.`
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
          notes: `This will happen to me.
Not in theory.
Not someday.
To this certainty.

No amount of money will save you.
No achievement will exempt you. No belief will rescue you. The richest person who ever lived is dead. The most powerful person who ever lived is dead. The most beloved person who ever lived is dead.

You cannot negotiate with death. You cannot bargain. You cannot cheat.
Every workaround, every loophole, every escape route you can think of — tried. By millions. By billions. None worked. Not one. Not ever.

You will die. And you know it.
You've known since childhood. The first time you understood the word "forever." The first time someone didn't come back. You've carried this knowledge your entire life. And it hasn't helped at all.`
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
          notes: `Don't distract yourself.
Don't rationalize.
Don't look away.

Don't reach for your phone. Don't start planning dinner. Don't think about work. Stay here. In this feeling. This is the only honest moment you've had in weeks.

This will happen to you. To this body. This mind. This awareness reading these words.
Not to someone else. Not later. To you.

You will die.

Now what?
What will you do with the time that's left? Not the time you think you have — the time you actually have. Which is less than you think. Always less than you think.

What will you do now?`        }
      ]
    }
  ]
};