import type { Deck } from './types';
import { GSAPAnimated } from '../components/GSAPAnimated';

export const guruPujaDeck: Deck = {
  id: 'guru-puja',
  name: 'Guru Puja',
  description: 'Isha Guru Pooja — an invocation to the lineage of masters',
  category: 'Inner Intelligence',
  theme: 'black',
  slides: [],
  cardStyle: {
    background: 'linear-gradient(135deg, #b8860b 0%, #8b4513 50%, #d4a017 100%)',
    color: '#fff',
  },
  slideGroups: [
    // ── Title Slide ──
    {
      id: 'title',
      title: 'Isha Guru Pooja',
      slides: [
        {
          id: 1,
          center: true,
          title: '',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" duration={2} delay={0.3}>
                <p style={{ fontSize: '2.2em', fontWeight: 700, color: '#d4a017', letterSpacing: '0.05em' }}>
                  🙏 Guru Pooja
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={2} delay={1.2}>
                <p style={{ fontSize: '1em', color: '#c0a060', marginTop: '1em', fontStyle: 'italic' }}>
                  An invocation to the lineage of masters
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1008',
          notes: `Isha Guru Pooja is a sacred invocation chanted in the Isha Yoga tradition. It is an offering of gratitude to the entire lineage of Gurus — from Narayana to Adi Shankaracharya and beyond — recognizing that the light of knowledge has been passed down through an unbroken chain of masters.`
        }
      ]
    },

    // ── Section 1: Purification ──
    {
      id: 'purification',
      title: 'Purification',
      slides: [
        {
          id: 2,
          center: true,
          title: '',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" duration={1.5} delay={0.3}>
                <p style={{ fontSize: '1.4em', color: '#d4a017', fontWeight: 600, marginBottom: '0.8em' }}>
                  Purification
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.8}>
                <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                  Apavitraḥ pavitro vā<br/>
                  Sarvāvasthāṁ gato'pi vā<br/>
                  Yaḥ smaret Puṇḍarīkākṣaṁ<br/>
                  Sa bāhyābhyantaraḥ śuciḥ
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1008',
          notes: `Apavitraḥ pavitro vā
Sarvāvasthāṁ gato'pi vā
Yaḥ smaret Puṇḍarīkākṣaṁ
Sa bāhyābhyantaraḥ śuciḥ

Translation:
Whether pure or impure, or in whatever condition one may be, one who remembers the lotus-eyed Lord becomes pure both externally and internally.`
        }
      ]
    },

    // ── Section 2: Avahanam — Invocation of the Guru Lineage ──
    {
      id: 'avahanam',
      title: 'Avahanam — Invocation of the Guru Lineage',
      slides: [
        {
          id: 3,
          center: true,
          title: '',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" duration={1.5} delay={0.3}>
                <p style={{ fontSize: '1.2em', color: '#d4a017', fontWeight: 600, marginBottom: '0.6em' }}>
                  Avahanam
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.8}>
                <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                  Nārāyaṇaṁ Padmabhavaṁ Vasiṣṭhaṁ<br/>
                  Śaktiṁ ca tatputra Parāśaraṁ ca<br/>
                  Vyāsaṁ Śukaṁ Gauḍapādaṁ mahāntaṁ<br/>
                  Govinda Yogīndram athāsya śiṣyam
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1008',
          notes: `Nārāyaṇaṁ Padmabhavaṁ Vasiṣṭhaṁ
Śaktiṁ ca tatputra Parāśaraṁ ca
Vyāsaṁ Śukaṁ Gauḍapādaṁ mahāntaṁ
Govinda Yogīndram athāsya śiṣyam

Translation:
I salute Narayana, Padmabhava (Brahma), Vasishta, Shakti and his son Parashara, Vyasa, Shuka, the great Gaudapada, and the disciple of Govinda Yogindra.`
        },
        {
          id: 4,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Śrī Śaṅkarācāryam athāsya Padma<br/>
                pādaṁ ca Hastāmalakaṁ ca śiṣyam<br/>
                Taṁ Troṭakaṁ Vārtikakāram anyān<br/>
                asmad gurūn santatam ānato'smi
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Śrī Śaṅkarācāryam athāsya Padma
pādaṁ ca Hastāmalakaṁ ca śiṣyam
Taṁ Troṭakaṁ Vārtikakāram anyān
asmad gurūn santatam ānato'smi

Translation:
I salute Sri Shankaracharya and his disciples — Padmapada, Hastamalaka, Trotaka, and Vartikakara. I bow continuously to all the Gurus in this lineage.`
        }
      ]
    },

    // ── Section 3: Praise of Shankara ──
    {
      id: 'praise-of-shankara',
      title: 'Praise of Shankara',
      slides: [
        {
          id: 5,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Śruti Smṛti Purāṇānāṁ<br/>
                ālayaṁ karuṇālayam<br/>
                Namāmi Bhagavatpādaṁ<br/>
                Śaṅkaraṁ lokśaṅkaram
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Śruti Smṛti Purāṇānāṁ
ālayaṁ karuṇālayam
Namāmi Bhagavatpādaṁ
Śaṅkaraṁ lokśaṅkaram

Translation:
I bow to Shankara, the abode of the Vedas, Smritis, and Puranas, the abode of compassion, Bhagavatpada — Shankara, who brings auspiciousness to the world.`
        },
        {
          id: 6,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Śaṅkaraṁ Śaṅkarācāryaṁ<br/>
                Keśavaṁ Bādarāyaṇam<br/>
                Sūtra bhāṣya kṛtau vande<br/>
                Bhagavantau punaḥ punaḥ
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Śaṅkaraṁ Śaṅkarācāryaṁ
Keśavaṁ Bādarāyaṇam
Sūtra bhāṣya kṛtau vande
Bhagavantau punaḥ punaḥ

Translation:
I salute again and again the two divine ones — Shankaracharya and Keshava Badarayana (Vyasa) — the authors of the Sutras and the commentary.`
        }
      ]
    },

    // ── Section 4: Meditation on the Guru ──
    {
      id: 'meditation',
      title: 'Meditation on the Guru',
      slides: [
        {
          id: 7,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.2em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Yadvāre nikhilā nilimpa pariṣad<br/>
                siddhiṁ vidatte'niśam<br/>
                Śrīmat Śrī laśitaṁ Jagad Guru padaṁ<br/>
                natvātma tṛptiṁ gataḥ
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Yadvāre nikhilā nilimpa pariṣad
siddhiṁ vidatte'niśam
Śrīmat Śrī laśitaṁ Jagad Guru padaṁ
natvātma tṛptiṁ gataḥ

Translation:
At whose doorway the entire assembly of celestial beings perpetually attains perfection, that illustrious seat of the Jagadguru — having bowed before it, one attains inner fulfillment.`
        },
        {
          id: 8,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.2em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Lokājñāna payodha pāṭanadhuraṁ<br/>
                Śrī Śaṅkaraṁ śarmadam<br/>
                Brahmānanda Sarasvatīṁ ca Śrī Brahmaṁ<br/>
                dhyāyāmi jyotirmayam
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Lokājñāna payodha pāṭanadhuraṁ
Śrī Śaṅkaraṁ śarmadam
Brahmānanda Sarasvatīṁ ca Śrī Brahmaṁ
dhyāyāmi jyotirmayam

Translation:
The one capable of dispelling the dense clouds of worldly ignorance, Sri Shankara the bestower of bliss, Brahmananda Saraswati and Sri Brahma — I meditate upon that luminous being, made of light.`
        }
      ]
    },

    // ── Section 5: Pushpanjalim — Offering of Flowers ──
    {
      id: 'pushpanjalim',
      title: 'Pushpanjalim — Offering of Flowers',
      slides: [
        {
          id: 9,
          center: true,
          title: '',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" duration={1.5} delay={0.3}>
                <p style={{ fontSize: '1.2em', color: '#d4a017', fontWeight: 600, marginBottom: '0.6em' }}>
                  Pushpanjalim
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.8}>
                <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                  Gurur Brahmā Gurur Viṣṇuḥ<br/>
                  Gurur devo Maheśvaraḥ<br/>
                  Guruḥ sākṣāt paraṁ Brahma<br/>
                  tasmai Śrī Gurave namaḥ
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1008',
          notes: `Gurur Brahmā Gurur Viṣṇuḥ
Gurur devo Maheśvaraḥ
Guruḥ sākṣāt paraṁ Brahma
tasmai Śrī Gurave namaḥ

Translation:
The Guru is Brahma, the Guru is Vishnu, the Guru is Lord Maheshwara. The Guru is verily the Supreme Brahman itself. Salutations to that Guru.`
        },
        {
          id: 10,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Akhaṇḍa maṇḍalākāraṁ<br/>
                vyāptaṁ yena carācaram<br/>
                Tat padaṁ darśitaṁ yena<br/>
                tasmai Śrī Gurave namaḥ
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Akhaṇḍa maṇḍalākāraṁ
vyāptaṁ yena carācaram
Tat padaṁ darśitaṁ yena
tasmai Śrī Gurave namaḥ

Translation:
The one whose form pervades the entire unbroken circle of creation — all that moves and all that is still — to that Guru who reveals that supreme state, salutations.`
        },
        {
          id: 11,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.2em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Śrī Brahmānandaṁ parama sukhadaṁ<br/>
                kevalaṁ jñāna mūrtim<br/>
                Viśvātītaṁ gagana sadṛśaṁ<br/>
                tattvamasyādi lakṣyam
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Śrī Brahmānandaṁ parama sukhadaṁ
kevalaṁ jñāna mūrtim
Viśvātītaṁ gagana sadṛśaṁ
tattvamasyādi lakṣyam

Translation:
The bliss of Brahman, the bestower of supreme happiness, the embodiment of pure knowledge, beyond the universe, vast like the sky, the goal indicated by "Tat Tvam Asi" — Thou art That.`
        },
        {
          id: 12,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.2em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Ekaṁ nityaṁ vimalam acalaṁ<br/>
                sarvadhi sākṣi bhūtam<br/>
                bhāvātītaṁ triguṇa rahitaṁ<br/>
                Sadguruṁ taṁ namāmi
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Ekaṁ nityaṁ vimalam acalaṁ
sarvadhi sākṣi bhūtam
bhāvātītaṁ triguṇa rahitaṁ
Sadguruṁ taṁ namāmi

Translation:
The One, Eternal, Pure, Immovable, the Witness of all intellects, beyond all states of being, free from the three Gunas — I salute that Sadguru.`
        }
      ]
    },

    // ── Section 6: Closing ──
    {
      id: 'closing',
      title: 'Closing',
      slides: [
        {
          id: 13,
          center: true,
          title: '',
          content: (
            <GSAPAnimated animation="fadeIn" duration={1.8} delay={0.5}>
              <p style={{ fontSize: '1.3em', fontStyle: 'italic', lineHeight: 1.8, color: '#e8d5a3' }}>
                Ajñāna timirāndhasya<br/>
                jñānāñjana śalākayā<br/>
                Cakṣur unmīlitaṁ yena<br/>
                tasmai Śrī Gurave namaḥ
              </p>
            </GSAPAnimated>
          ),
          backgroundColor: '#1a1008',
          notes: `Ajñāna timirāndhasya
jñānāñjana śalākayā
Cakṣur unmīlitaṁ yena
tasmai Śrī Gurave namaḥ

Translation:
To the one who opens the eyes blinded by the darkness of ignorance, with the collyrium stick of knowledge — to that Guru, salutations.`
        },
        {
          id: 14,
          center: true,
          title: '',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" duration={2} delay={0.5}>
                <p style={{ fontSize: '2em', color: '#d4a017' }}>🙏</p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={2} delay={1.5}>
                <p style={{ fontSize: '1.2em', fontStyle: 'italic', color: '#c0a060', marginTop: '0.5em' }}>
                  Gurur Brahmā Gurur Viṣṇuḥ<br/>
                  Gurur devo Maheśvaraḥ<br/>
                  Guruḥ sākṣāt paraṁ Brahma<br/>
                  tasmai Śrī Gurave namaḥ
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1008',
          notes: `This is the final offering. The entire Guru Pooja is an act of dissolving the ego at the feet of the Guru — recognizing that everything we know, everything we are, everything we can become, flows from that grace.

In the Isha tradition, Guru Pooja is not worship of a person. It is an acknowledgement that the highest possibility within a human being has been demonstrated by someone — and that is worthy of the deepest reverence.`
        }
      ]
    }
  ]
};
