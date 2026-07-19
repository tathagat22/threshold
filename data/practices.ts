import type { Practice } from "@/lib/types";

export const practices: Practice[] = [
  {
    slug: "zen-breath-counting",
    title: "Count the Breath",
    promise:
      "Notice the exact instant your attention slips off the count — and notice yourself simply come back, with no story about it.",
    source: {
      tradition: "Zen Buddhism (Rinzai; also used in Sōtō)",
      citation:
        "Katsuki Sekida, Zen Training: Methods and Philosophy (Weatherhill, 1975), chapter \"Counting and Following the Breath\"; corroborated by Eizan Tatsuta Rōshi, \"A Guide to Susokukan: Breath-Counting Meditation in Zen,\" published by The Matheson Trust, reproduced from the Ningen Zen school.",
      isAdaptation: true,
    },
    durationSeconds: 180,
    steps: [
      {
        instruction:
          "Sit upright, hands resting quietly. Let your eyes soften or close. Don't change the breath yet — just let it move on its own.",
        durationSeconds: 20,
      },
      {
        instruction:
          "As one exhale finishes, silently count 'one.' Let the next exhale end with 'two.' One number, one out-breath, nothing added.",
        durationSeconds: 25,
      },
      {
        instruction:
          "Keep counting each exhale up to ten. Feel the breath leave the body before the number lands — the count follows the breath, not the other way around.",
        durationSeconds: 70,
      },
      {
        instruction:
          "When you notice you've lost the count — jumped ahead, forgotten where you were, drifted into thought — don't hunt for the right number. Just return to 'one' on the next exhale.",
        durationSeconds: 45,
      },
      {
        instruction:
          "Let the counting go. Sit for a few breaths with no number at all — just the breath, coming and going on its own.",
        durationSeconds: 20,
      },
    ],
    context:
      "Susokukan (数息観), \"observing the breath through numbers,\" is a foundational method in Rinzai Zen, also used in Sōtō. It descends from ganana, the counting stage of ānāpānasati, transmitted to China through the Dhyāna Sūtras and shaping early Chan and Zen practice. In the form described by Katsuki Sekida, the practitioner silently counts each exhalation from one to ten, then begins again at one. Losing the count is ordinary and not a failure — the practice is noticing the drift and returning. Traditionally susokukan is taught directly by a teacher as the entry point into zazen, often preceding koan work or shikantaza (just sitting).",
    relatedSlugs: ["gap-between-two-breaths", "anapanasati-mindful-breathing"],
    provenance: "verified",
  },
  {
    slug: "self-inquiry-who-am-i",
    title: "Self-Inquiry: Who Am I?",
    promise:
      "You'll notice the 'I' you've been chasing has no fixed location, shape, or story attached to it — just a bare, wordless sense of being here that was already present before you asked the question.",
    source: {
      tradition: "Advaita Vedanta (Ramana Maharshi)",
      citation:
        "Sri Ramana Maharshi, Nāṉ Yār? (Who Am I?), trans. T. M. P. Mahadevan (Sri Ramanasramam, first published 1923); also collected in Be As You Are: The Teachings of Sri Ramana Maharshi, ed. David Godman (Arkana/Penguin, 1985), chapter \"Self-Enquiry.\"",
      isAdaptation: true,
    },
    durationSeconds: 200,
    steps: [
      {
        instruction:
          "Sit still and let your eyes close. Let the breath settle on its own — don't try to change it.",
        durationSeconds: 20,
      },
      {
        instruction:
          "Notice the felt sense of 'I' — the one who is aware right now, sitting, breathing, hearing these words. Don't describe it. Just notice that it is there.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Silently ask, 'Who am I?' Don't answer with an idea — not 'I am the body,' not 'I am the mind.' Let the question turn your attention back toward whoever is asking it.",
        durationSeconds: 50,
      },
      {
        instruction:
          "If a thought rises — a memory, a worry, a plan — ask, 'To whom did this arise?' The answer is 'To me.' Then ask, 'Who is this me?' Keep turning attention back to that root sense of 'I' instead of following the thought outward.",
        durationSeconds: 60,
      },
      {
        instruction:
          "Let the question go quiet. Stop chasing an answer. Rest in whatever plain sense of being here is left.",
        durationSeconds: 30,
      },
    ],
    context:
      "This practice comes from Sri Ramana Maharshi (1879–1950), a South Indian sage whose central teaching was ātma vichāra, self-inquiry. Instead of meditating on an object or repeating a mantra, you turn attention back onto the one who is aware, tracing the sense of 'I' to where it arises rather than following it out into thoughts, memories, or roles. Ramana set this out around 1902 in written answers to a devotee, Sivaprakasam Pillai, later published as Nāṉ Yār? He was explicit that the question isn't answered with a concept like 'I am consciousness' — any such answer is just another thought to be traced back in turn.",
    relatedSlugs: ["zuowang-sitting-forgetting", "stoic-view-from-above", "choiceless-awareness"],
    provenance: "verified",
  },
  {
    slug: "gap-between-two-breaths",
    title: "The Gap Between Two Breaths",
    promise:
      "Notice the fraction-of-a-second stillness that already exists at the end of each exhale and each inhale, before the next breath starts moving.",
    source: {
      tradition: "Kashmir Śaivism (Vijñāna Bhairava Tantra)",
      citation:
        "Vijñāna Bhairava Tantra, verses 24–25 (Jaideva Singh's dhāraṇā numbering) — trans. Jaideva Singh, Vijñānabhairava or Divine Consciousness (Motilal Banarsidass, 1979); cross-checked against Christopher Wallis's translation and commentary (hareesh.org) and Paul Reps' rendering in Zen Flesh, Zen Bones.",
      isAdaptation: true,
    },
    durationSeconds: 180,
    steps: [
      {
        instruction:
          "Sit comfortably and let your breath move at its own pace, without controlling it. Just notice the air moving in and out.",
        durationSeconds: 30,
      },
      {
        instruction:
          "As one exhale finishes, notice the brief moment before the next inhale begins — a fraction of a second where nothing is moving. Rest your attention there.",
        durationSeconds: 40,
      },
      {
        instruction:
          "As one inhale finishes, notice the same kind of pause before the next exhale begins. Rest your attention there too.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Keep letting your attention land in both of these gaps, cycle after cycle, without forcing the breath to pause any longer than it naturally does.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Stop tracking the breath itself and notice the stillness that was in each of those small gaps. Let your attention rest in that, open, without needing a specific object.",
        durationSeconds: 30,
      },
    ],
    context:
      "This technique comes from the Vijñāna Bhairava Tantra, a Kashmir Śaiva text (likely composed by the 8th–9th century) structured as 112 direct pointers to a state it calls bharitā, \"fullness.\" Verse 24 describes attending to the two points where the rising exhale and the descending inhale each originate; verse 25 extends this to the pause where the breath momentarily stops moving. In the full tradition, a practitioner may also join a two-syllable mantra (so'ham) to the breath, but this exercise isolates only the bare awareness instruction: notice the gap without altering the breath.",
    relatedSlugs: ["zen-breath-counting", "anapanasati-mindful-breathing"],
    provenance: "verified",
  },
  {
    slug: "zuowang-sitting-forgetting",
    title: "Zuò Wàng — Sitting and Forgetting",
    promise:
      "Notice the moment your body stops needing to be tracked, your inner commentary goes quiet, and the line between you and the room gets hard to find.",
    source: {
      tradition: "Taoism (Zhuangzi)",
      citation:
        'Zhuangzi, Chapter 6 ("The Great and Venerable Teacher," 大宗師), the Yan Hui–Confucius dialogue on zuò wàng (坐忘). Trans. Burton Watson, The Complete Works of Chuang Tzu (Columbia University Press, 1968): "I smash up my limbs and body, drive out perception and intellect, cast off form, do away with understanding, and make myself identical with the Great Thoroughfare. This is what I mean by sitting down and forgetting everything."',
      isAdaptation: true,
    },
    durationSeconds: 180,
    steps: [
      {
        instruction:
          "Sit however you're sitting. Let your hands rest, let your eyes half-close or close. You're not arranging yourself for this — just noticing you're already here.",
        durationSeconds: 20,
      },
      {
        instruction:
          "Bring attention to your limbs and torso — shoulders, arms, spine, legs. Now stop maintaining them. Don't relax them on purpose; just quit checking on them, the way you'd quit watching a pot that's already boiling.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Notice the running voice that names and judges what's happening. Let its volume drop, not by fighting it, but by simply not feeding it the next word.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Notice where you sense your own outline — the edge where 'you' stop and the room starts. Stop holding that edge in place. Let it go slack.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Rest in whatever is left when body-sense, inner commentary, and edge are no longer being held. Don't name it. Just stay.",
        durationSeconds: 40,
      },
    ],
    context:
      "In Zhuangzi's Great Master chapter, Confucius's student Yan Hui reports his progress in stages, arriving finally at \"sitting and forgetting\" — dropping bodily awareness, dimming the intellect, leaving form behind, and becoming identical with the Great Thoroughfare (大通, dàtōng), a term for the all-pervading Tao. The original is a philosophical dialogue, not a meditation manual — it describes a state rather than prescribing a technique. The steps here are an adaptation that traces the same progression the text names, so you can meet the description rather than just read it.",
    relatedSlugs: ["self-inquiry-who-am-i", "stoic-view-from-above", "choiceless-awareness"],
    provenance: "verified",
  },
  {
    slug: "anapanasati-mindful-breathing",
    title: "Ānāpānasati: Mindfulness of Breathing",
    promise:
      "Notice that your breath is already changing on its own — sometimes long, sometimes short — and that just watching it closely is enough to make it grow quieter.",
    source: {
      tradition: "Theravāda Buddhism (Pāli Canon)",
      citation:
        "Ānāpānasati Sutta, Majjhima Nikāya 118 (first tetrad; the same four steps also open the breathing section of the Satipaṭṭhāna Sutta, MN 10), trans. Thanissaro Bhikkhu, Access to Insight.",
      isAdaptation: true,
    },
    durationSeconds: 210,
    steps: [
      {
        instruction:
          "Sit with your spine upright and your body still. Let your eyes close. Don't change your breath yet — just let it move in and out on its own.",
        durationSeconds: 20,
      },
      {
        instruction:
          "As you breathe in, notice whether the breath is long. As you breathe out, notice that too. Just know it: 'long in, long out' — without trying to make it longer.",
        durationSeconds: 45,
      },
      {
        instruction:
          "Now notice if the breath has grown short. Know the short in-breath as short, the short out-breath as short. You're not choosing this — you're watching it happen.",
        durationSeconds: 45,
      },
      {
        instruction:
          "Widen your attention to feel the whole breath as one event — its beginning, middle, and end — as sensation moving through your chest and belly, not just at the nostrils.",
        durationSeconds: 50,
      },
      {
        instruction:
          "With each out-breath, let the body relax a little more. Let the breath itself grow calmer and quieter, the way ripples settle on their own when you stop disturbing the water.",
        durationSeconds: 50,
      },
    ],
    context:
      "Ānāpānasati means \"mindfulness of breathing in and out.\" In the Ānāpānasati Sutta, the Buddha lays out sixteen steps for this practice, grouped into four sets of four. The first four steps — knowing the breath as long, knowing it as short, feeling the whole body of the breath, and calming the bodily process of breathing — form the foundation, and are the steps used here. They don't ask you to control the breath, only to know it accurately as it is. This same sequence opens the breathing section of the Satipaṭṭhāna Sutta, where it's presented as the entry point for observing the body directly.",
    relatedSlugs: ["zen-breath-counting", "gap-between-two-breaths", "gestalt-awareness-continuum"],
    provenance: "verified",
  },
  {
    slug: "stoic-view-from-above",
    title: "The View From Above",
    promise:
      "Notice your worries shrink to a point as your attention widens outward from your body to the room, the turning earth, and the depth of time before and after your life.",
    source: {
      tradition: "Stoicism (Marcus Aurelius)",
      citation:
        "Marcus Aurelius, Meditations 9.30, 9.32, and 12.24, trans. A.S.L. Farquharson (Oxford: Clarendon Press, 1944; cf. Gregory Hays, Meditations: A New Translation, Modern Library, 2002). Pierre Hadot names and examines this exercise as \"the view from above\" in Philosophy as a Way of Life (Blackwell, 1995) and The Inner Citadel (Harvard University Press, 1998).",
      isAdaptation: true,
    },
    durationSeconds: 180,
    steps: [
      {
        instruction:
          "Notice your body exactly where it is right now — its weight against the chair or floor, the points of contact, the temperature of the air on your skin.",
        durationSeconds: 20,
      },
      {
        instruction: "Widen your attention to the room around you: its walls and objects, the small sounds moving through it.",
        durationSeconds: 25,
      },
      {
        instruction:
          "Widen further, in your mind, to the building, then the street outside — the people moving through it right now, each one wrapped up in their own day, most never thinking of you at all.",
        durationSeconds: 30,
      },
      {
        instruction:
          "Keep expanding: picture your city or town as if seen from a height, then the whole curve of the earth, its lit side and its dark side turning together.",
        durationSeconds: 30,
      },
      {
        instruction:
          "Go further still — the earth as one small point among the sun's other planets, the sun as one star among billions, all of it wheeling through vast space.",
        durationSeconds: 35,
      },
      {
        instruction:
          "Now add time: picture the stretch of years before you were born and the stretch after you die, both disappearing into the same depth. Let whatever is bothering you sit inside that scale for a moment. Then gently bring your attention back to your body, here.",
        durationSeconds: 40,
      },
    ],
    context:
      'Marcus Aurelius, the Roman emperor and Stoic philosopher, repeatedly used a mental exercise of zooming out from his immediate circumstances to the scale of the cosmos and of time. In Meditations 9.30 he tells himself to "look from above" at the crowds, rites, and journeys of human life; in 9.32 he pictures the whole universe held in thought alongside the vastness of time before birth and after death; in 12.24 he imagines being lifted into the air to look down on human affairs. The scholar Pierre Hadot named this recurring exercise "the view from above" and treated it as one of Stoicism\'s central techniques for shrinking anxiety and reordering what matters.',
    relatedSlugs: ["self-inquiry-who-am-i", "zuowang-sitting-forgetting"],
    provenance: "verified",
  },
  {
    slug: "focusing-felt-sense",
    title: "Focusing: Finding the Felt Sense",
    promise:
      "Notice a subtle loosening or easing in your throat, chest, or stomach the moment a word or image finally matches how a situation actually feels in your body.",
    source: {
      tradition: "Focusing (Eugene Gendlin)",
      citation:
        "Eugene T. Gendlin, Focusing (Everest House, 1978; rev. ed. Bantam Books, 1982); method also documented as \"The Classic Six Steps\" by the International Focusing Institute, focusing.org.",
      isAdaptation: true,
    },
    durationSeconds: 200,
    steps: [
      {
        instruction:
          "Sit quietly and ask yourself, silently, 'What's between me and feeling fine right now?' Let whatever comes up surface one item at a time, and mentally set each one down a small distance in front of you, rather than working on it.",
        durationSeconds: 30,
      },
      {
        instruction:
          "From everything you set down, choose the one issue that feels most alive or pressing right now. Don't start thinking about it yet — just hold it in mind as a whole.",
        durationSeconds: 25,
      },
      {
        instruction:
          "Ask, 'What does this whole issue feel like in my body?' Scan your throat, chest, and stomach, and wait for a vague, unclear bodily sense to form — not an emotion you can already name, just a felt quality.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Let a word, short phrase, or image rise up that seems to capture the quality of that bodily sense — something like 'tight,' 'sinking,' or 'a knot.'",
        durationSeconds: 30,
      },
      {
        instruction:
          "Go back and forth between the word or image and the physical sense itself. Ask, 'Does that really match?' If it doesn't quite fit, let it adjust until the word and the felt sense line up.",
        durationSeconds: 35,
      },
      {
        instruction:
          "Ask the felt sense gently, 'What is it about this whole thing that feels so ___?' Then stop asking and just wait, attention on your body, for any shift, release, or easing — however small.",
        durationSeconds: 40,
      },
    ],
    context:
      "Focusing was developed by philosopher and psychologist Eugene Gendlin at the University of Chicago in the 1960s, after he and colleagues studied recordings of therapy sessions to find out why some clients improved and others didn't. The difference wasn't the therapist's technique — it was that certain clients paused to sense a vague, bodily quality of their problem before talking about it, something Gendlin called the \"felt sense.\" He published the method as a repeatable six-step process in his 1978 book Focusing. This is a body-awareness skill, not therapy or a spiritual technique: it trains you to notice a bodily sense that carries more than words alone, and to recognize the small physical shift that happens when a description finally matches it.",
    relatedSlugs: ["self-inquiry-who-am-i", "choiceless-awareness", "gestalt-awareness-continuum"],
    provenance: "verified",
  },
  {
    slug: "choiceless-awareness",
    title: "Choiceless Awareness",
    promise:
      "You'll catch a thought or feeling the instant it appears, and notice the exact moment you start naming it, judging it, or trying to change it — then let that labeling drop and watch what's left.",
    source: {
      tradition: "J. Krishnamurti's teaching (independent philosopher, non-religious)",
      citation:
        "J. Krishnamurti, The First and Last Freedom (1954), chapter \"Awareness\" — \"Awareness is observation without condemnation... the moment you name a feeling, you are no longer merely aware of it.\" Related formulation in Freedom from the Known (1969).",
      isAdaptation: true,
    },
    durationSeconds: 180,
    steps: [
      {
        instruction:
          "Sit still and let your attention settle on whatever is already here — a sound, a body sensation, a thought passing through. Don't pick one on purpose; just notice what's already present.",
        durationSeconds: 20,
      },
      {
        instruction:
          "Let one thing come into focus: a thought, a physical sensation, or a feeling. Watch it the way you'd watch something move — without deciding what it means yet.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Notice if you start to name it ('this is boredom,' 'this is my shoulder,' 'this is a bad thought') or judge it as good or bad. When you catch that happening, notice the naming itself as just another thing arising — don't fight it, just see it.",
        durationSeconds: 60,
      },
      {
        instruction:
          "Let the labeling loosen. Go back to plain watching — the thought or sensation changing, fading, or being replaced by another, with no verdict attached to any of it.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Let your attention move to whatever arises next, without searching for something better to watch or pushing away something you don't like. Just let this end when it ends.",
        durationSeconds: 20,
      },
    ],
    context:
      "Krishnamurti described awareness as simply watching a thought, sensation, or feeling as it happens, without naming it, judging it right or wrong, or trying to change it — contrasting this with introspection, which watches things in order to improve or fix them. He held that naming or condemning something as it arises immediately splits you from it, creating a watcher and a thing watched, and that dropping that split is where the watching becomes accurate. Krishnamurti was explicit that this was not a religious or spiritual technique, a path to enlightenment, or part of any belief system — he rejected gurus, doctrines, and organized spirituality throughout his life and described this simply as observing what is actually happening, moment to moment.",
    relatedSlugs: ["zuowang-sitting-forgetting", "self-inquiry-who-am-i", "gestalt-awareness-continuum"],
    provenance: "verified",
  },
  {
    slug: "gestalt-awareness-continuum",
    title: "The Awareness Continuum (Now and How)",
    promise:
      "You'll notice the constant stream of small, ordinary things already present for you right now — a sound, a muscle tensing, an itch, a passing thought — without stopping to explain or analyze any of them.",
    source: {
      tradition: "Gestalt Therapy (Perls, Hefferline, Goodman)",
      citation:
        "Perls, F., Hefferline, R., & Goodman, P., Gestalt Therapy: Excitement and Growth in the Human Personality (Julian Press, 1951), Part II, \"Feeling the Actual\" — instructing the reader to begin sentences with \"Now I...\" to describe direct, present-moment awareness; the same technique is documented as the \"awareness continuum\" rule in Perls & Levitsky, \"The Rules and Games of Gestalt Therapy\" (1970), and demonstrated in Perls, Gestalt Therapy Verbatim (Real People Press, 1969).",
      isAdaptation: true,
    },
    durationSeconds: 180,
    steps: [
      {
        instruction:
          "Stay exactly where you are — no need to close your eyes, sit up straighter, or change anything. This is a noticing exercise, not a relaxation one.",
        durationSeconds: 20,
      },
      {
        instruction:
          "Silently finish the sentence 'Now I am aware of...' with whatever is most obvious right now — a sound, a color in view, the pressure of your chair. Once you've named it, let it go and finish the sentence again with the next thing.",
        durationSeconds: 40,
      },
      {
        instruction:
          "Keep repeating the same sentence, but let it move inward: the temperature of your skin, the rhythm of your breathing, a tension you hadn't noticed, an itch. Name each one, then move on.",
        durationSeconds: 40,
      },
      {
        instruction:
          "If a thought like 'this is pointless' or 'am I doing this right' shows up, don't chase it or argue with it — just fold it into the same sentence: 'Now I am aware of a thought that I'm doing this wrong.' Then keep cycling.",
        durationSeconds: 40,
      },
      {
        instruction:
          "For this last stretch, drop any plan for what should come next. Let 'Now I am aware of...' catch whatever surfaces — sound, sensation, thought, or feeling — in whatever order it actually arrives.",
        durationSeconds: 40,
      },
    ],
    context:
      "This exercise comes from Gestalt therapy, a form of psychotherapy developed in the 1940s and 50s. Its creators noticed that people constantly interrupt direct experience with explanation, judgment, and storytelling — narrating why something is happening instead of noticing that it's happening. The \"awareness continuum\" interrupts that habit by forcing every sentence into the same present-tense frame: \"Now I am aware of...\". Repeated for a few minutes, the exercise doesn't produce insight or calm on its own — it produces a plain inventory of what was already there: sounds, tensions, half-formed thoughts, passing feelings. There's no correct list of things to notice and nothing to figure out about them.",
    relatedSlugs: ["choiceless-awareness", "focusing-felt-sense", "anapanasati-mindful-breathing"],
    provenance: "verified",
  },
];
