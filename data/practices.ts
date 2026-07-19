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
    relatedSlugs: [
      "gap-between-two-breaths",
      "anapanasati-mindful-breathing",
      "centering-prayer-sacred-word",
    ],
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
    relatedSlugs: [
      "zuowang-sitting-forgetting",
      "stoic-view-from-above",
      "hitbodedut-personal-prayer",
    ],
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
    relatedSlugs: [
      "zen-breath-counting",
      "anapanasati-mindful-breathing",
      "silent-dhikr-breath",
    ],
    provenance: "verified",
  },
  {
    slug: "silent-dhikr-breath",
    title: "Silent Dhikr of the Heart (Dhikr Khafi)",
    promise:
      'Notice the words "Allah" and "Hu" arising silently with your own breath, low in your chest, without your tongue or lips ever moving.',
    source: {
      tradition: "Sufism (Naqshbandi order)",
      citation:
        "\"The Naqshbandi Way of Dhikr\" (naqshbandi.org) and \"The Eleven Principles of the Naqshbandi Path\" (Golden Sufi Center), which quote Naqshbandi masters Baha ad-din Naqshband and Khwaja Ubaydullah Ahrar on silent dhikr (dhikr khafi) and breath-awareness (hush dar dam); background in Annemarie Schimmel, Mystical Dimensions of Islam (University of North Carolina Press, 1975), chapter \"The Path.\"",
      isAdaptation: true,
    },
    durationSeconds: 200,
    steps: [
      {
        instruction:
          "Sit upright with your spine straight, hands resting on your knees, eyes closed. Let your shoulders drop and your breath settle into its own rhythm.",
        durationSeconds: 25,
      },
      {
        instruction:
          "Bring your attention down from your head into the center of your chest, near your heart. Feel it rise and fall with each breath.",
        durationSeconds: 25,
      },
      {
        instruction:
          'As you breathe in through your nose, silently form the word "Allah" in your chest — no sound, no movement of your tongue or lips, just the shape of the word arising with the breath.',
        durationSeconds: 50,
      },
      {
        instruction:
          'As you breathe out, silently let go of the word "Hu" — as if the exhale itself were naming what moves it.',
        durationSeconds: 50,
      },
      {
        instruction:
          "Let your tongue and mind grow quiet. Keep the same rhythm, breath in, breath out, until the remembrance seems to continue on its own, in the heart, without your effort.",
        durationSeconds: 50,
      },
    ],
    context:
      "Dhikr, remembrance of God, is the central devotional practice of Sufism. Sufi orders distinguish dhikr jali, remembrance spoken aloud, from dhikr khafi, the silent dhikr of the heart, which the Naqshbandi order (founded by Baha ad-din Naqshband, d. 1389) especially emphasizes as \"awareness in the breath\" (hush dar dam): the Name Allah, or the pronoun Hu (\"He\"), repeated silently in time with breathing until remembrance settles from the tongue into the heart. Within the order this is normally transmitted personally by a living shaykh inside an initiatory chain, not learned from text alone — what follows is a respectful introduction to its rhythm, not a substitute for instruction from a teacher.",
    relatedSlugs: [
      "gap-between-two-breaths",
      "centering-prayer-sacred-word",
      "anapanasati-mindful-breathing",
    ],
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
    relatedSlugs: ["self-inquiry-who-am-i", "stoic-view-from-above"],
    provenance: "verified",
  },
  {
    slug: "centering-prayer-sacred-word",
    title: "Centering Prayer: The Sacred Word",
    promise:
      "Notice the moment a thought pulls your attention away — and the small, unforced return to your one word, again and again.",
    source: {
      tradition:
        "Christian contemplative tradition (The Cloud of Unknowing / Centering Prayer, Trappist-Cistercian)",
      citation:
        'The Cloud of Unknowing, Ch. 7 (anonymous English author, c. late 14th century) — instructing the seeker to fasten "a little word of one syllable," such as GOD or LOVE, to the heart; and the "Four Guidelines" of Centering Prayer as taught by Fr. Thomas Keating, Fr. William Meninger, and Fr. M. Basil Pennington (Trappist monks, St. Joseph\'s Abbey, Spencer, MA), set out in Keating\'s Open Mind, Open Heart (1986) and Contemplative Outreach\'s "The Method of Centering Prayer."',
      isAdaptation: true,
    },
    durationSeconds: 180,
    steps: [
      {
        instruction:
          "Sit comfortably and close your eyes. Settle your body, and silently choose one short word — 'God,' 'Love,' 'Peace,' or 'Abba' — as your sacred word.",
        durationSeconds: 30,
      },
      {
        instruction:
          "Let the word rest gently in your awareness. Don't repeat it like a chant — just hold it lightly as a sign of your consent to be present.",
        durationSeconds: 45,
      },
      {
        instruction:
          "When a thought, feeling, or image pulls your attention away, notice it without judging it, and return — ever so gently — to your one word.",
        durationSeconds: 75,
      },
      {
        instruction:
          "Let even the word grow quiet now. Rest in the stillness underneath it for these last moments, then slowly open your eyes.",
        durationSeconds: 30,
      },
    ],
    context:
      "This practice draws on The Cloud of Unknowing, an anonymous 14th-century English text whose author instructs the seeker to fasten a single short word — GOD or LOVE — to the heart, using it to gently set aside busy thought rather than fight it. In the 20th century, Trappist monks Fr. William Meninger, Fr. M. Basil Pennington, and Fr. Thomas Keating, at St. Joseph's Abbey in Spencer, Massachusetts, formalized this into Centering Prayer. The method is not concentration or forced emptiness: when a thought arises, you don't chase or resist it — you simply, without strain, return to the word.",
    relatedSlugs: [
      "hitbodedut-personal-prayer",
      "zen-breath-counting",
      "silent-dhikr-breath",
    ],
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
    relatedSlugs: [
      "zen-breath-counting",
      "gap-between-two-breaths",
      "silent-dhikr-breath",
    ],
    provenance: "verified",
  },
  {
    slug: "hitbodedut-personal-prayer",
    title: "Hitbodedut: Talking to God as a Friend",
    promise:
      "Notice the moment your sentences stop sounding recited and start sounding like your own voice — plainer, rougher, truer — and what loosens in your chest when they do.",
    source: {
      tradition: "Judaism (Breslov Hasidism, Rebbe Nachman of Breslov)",
      citation:
        'Likutey Moharan II, 25 (hitbodedut described as "a level above all levels"); Likutey Moharan I, 52:3 (recommends a secluded, private setting); practical instructions as collected by Rabbi Chaim Kramer, director of the Breslov Research Institute, in Crossing the Narrow Bridge, ch. 9, "Hitbodedut."',
      isAdaptation: true,
    },
    durationSeconds: 200,
    steps: [
      {
        instruction:
          "Find a place where you can speak out loud without being overheard — a closed room, or better, somewhere outdoors like Rebbe Nachman taught. Sit or stand however is comfortable.",
        durationSeconds: 20,
      },
      {
        instruction:
          "Start talking to God in your own everyday language — the words you'd use with a close friend, not formal or borrowed phrases. Say what's actually on your mind right now.",
        durationSeconds: 45,
      },
      {
        instruction:
          "Keep going. Name one specific thing from today — a worry, a frustration, a small joy — in plain words. Don't tidy it up. Argue if you need to.",
        durationSeconds: 65,
      },
      {
        instruction:
          "If the words run dry, say that out loud too. Or just repeat one honest word as many times as it takes for more to come.",
        durationSeconds: 40,
      },
      {
        instruction: "Close by naming one thing you actually want, stated plainly, without decoration.",
        durationSeconds: 30,
      },
    ],
    context:
      'Hitbodedut (literally "self-seclusion") is a practice taught by Rebbe Nachman of Breslov (1772–1810), a Hasidic master. Rather than reciting fixed liturgy, the practitioner sets aside private time — Rebbe Nachman recommended at least an hour daily, ideally outdoors — to speak to God spontaneously, in ordinary language, as one would to a close friend: naming worries, failures, gratitude, and requests without polish or formula. If words won\'t come, Rebbe Nachman advised simply saying so, or repeating one word until more follows. It supplements, rather than replaces, the standard Jewish daily prayers.',
    relatedSlugs: ["centering-prayer-sacred-word", "self-inquiry-who-am-i"],
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
];
