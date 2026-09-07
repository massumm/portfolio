import mouSigning from '../Assets/runmate-mou-signing.jpg';
import mouBanner from '../Assets/runmate-mou-banner.jpg';
import mouMeeting from '../Assets/runmate-mou-meeting.jpg';

export const projects = [
  {
    title: 'RunMate Club (Marathon Tracker)',
    period: 'Jan 2026 - Present',
    images: [
      { src: mouSigning, alt: 'MoU signing ceremony between Prokriti O Jibon Foundation and RunMate for Pantonix Tiger Run Dhaka 2026' },
      { src: mouBanner, alt: 'Pantonix Tiger Run Dhaka 2026 MoU signing ceremony banner' },
      { src: mouMeeting, alt: 'RunMate and Prokriti O Jibon Foundation team at the MoU signing meeting' },
    ],
    bullets: [
      'Lead Flutter Developer on RunMate Club, a marathon platform where runners join events, track their runs live, and review their running performance.',
      'Built live tracking, Free Run, Group Run, leaderboards, and personal performance history, plus an admin panel that lets organizers manage events.',
      'Launched with PANTONIX TIGER RUN DHAKA 2026, organized by Prokriti O Jibon Foundation and Channel i — the first app-based live marathon tracking in Bangladesh.',
      'Loads KML-based routes and renders real-time progress on Google Maps, with run data stored in Firebase and live location sharing between runners.',
      'Background location tracking and offline run storage keep sessions recording with the screen off or without network, syncing to Firebase on reconnect.',
      'Used Google Maps SDK, Sentry for monitoring, Google Analytics, Firebase App Distribution, and unit testing.',
    ],
    links: {
      code: 'https://github.com/massumm/marathon-tracker',
      demo: 'http://runmate.club/',
    },
    tags: [
      'Flutter',
      'Google Maps SDK',
      'Firebase',
      'GetX',
      'Live Tracking',
      'Leaderboard',
      'Sentry',
      'Google Analytics',
      'Unit Testing',
    ],
  },
  {
    title: 'Office Attendance',
    period: 'Mar 2025 - Present',
    bullets: [
      'Attendance system where check-in/out is done via TFLite face recognition.',
      'Attendance data is instantly viewable in Google Sheets.',
      'Tech stack: Flutter, Dart, TFLite, Google Sheets API, googleapis_auth, SharedPreferences, GetX.',
    ],
    links: {
      code: 'https://github.com/massumm/office_attendence',
      demo: null,
    },
    tags: [
      'Flutter',
      'Dart',
      'TFLite',
      'Google Sheets API',
      'GetX',
      'SharedPreferences',
    ],
  },
  {
    title: 'Digimed Protect99',
    period: 'Aug 2024 - Mar 2025',
    bullets: [
      'Online identity verification and secure portal application built for the healthcare and digital medical sector.',
      'Implemented authentication and user management on AWS Cognito, with DynamoDB storage and SNS/SES notification flows.',
      'Tech: Flutter, GetX, AWS DynamoDB, AWS Cognito, AWS SNS, AWS SES, Firebase Cloud Messaging, SharedPreferences.',
    ],
    links: {
      code: null,
      demo: 'https://play.google.com/store/apps/details?id=com.digimed.protect99',
    },
    tags: [
      'Flutter',
      'GetX',
      'AWS DynamoDB',
      'AWS Cognito',
      'AWS SNS',
      'AWS SES',
      'Firebase Cloud Messaging',
    ],
  },
  {
    title: 'Medishop',
    period: 'Aug 2024 - Nov 2024',
    bullets: [
      'Medi Shop lets customers upload prescriptions, get verified, receive push notifications for approval, payment, and pickup, and get refill reminders ensuring convenience, secure orders, and repeat visits.',
      'Automated refill reminders with scheduled cron jobs to drive repeat orders, and used Google Cloud Vision API to read uploaded prescription images.',
      'Tech: Laravel (Backend, Admin Panel), Getx, Provider, FCM, Google Cloud Vision API, Cron Jobs.',
    ],
    links: {
      code: null,
      demo: 'https://medi-shop.xorgeek.com/',
    },
    tags: [
      'Laravel',
      'GetX',
      'Provider',
      'FCM',
      'Google Cloud Vision API',
      'Cron Jobs',
    ],
  },
  {
    title: 'Pet App',
    period: 'Aug 2023 - Mar 2024',
    bullets: [
      'A Flutter-based pet shop management app where stores can manage pet details (including cats, parents, and offspring).',
      'Users can log in to view pet and shop information.',
      'Tech: Flutter, Dart, AWS DynamoDB, AWS Cognito, AWS SNS, AWS SES, Firebase Cloud Messaging, SharedPreferences, Provider/GetX.',
    ],
    links: {
      code: null,
      demo: 'https://dogcatbirth-records.com/',
    },
    tags: [
      'Flutter',
      'Dart',
      'AWS DynamoDB',
      'AWS Cognito',
      'AWS SNS',
      'AWS SES',
      'Firebase Cloud Messaging',
      'Provider',
      'GetX',
    ],
  },
  {
    title: 'Gram Stain Atlas',
    period: 'Jun 2023 - Dec 2023',
    bullets: [
      'Medical reference app for Japanese clinical users with a searchable offline gram-stain database.',
      'Integrated Optical Character Recognition (OCR) to extract and read text from medical commentaries and reference documents.',
      'Tech: Flutter, GetX, WebView, OCR, offline medical database.',
    ],
    links: {
      code: null,
      demo: 'https://play.google.com/store/apps/details?id=jp.or.ohtahp.gramstain',
    },
    tags: [
      'Flutter',
      'GetX',
      'WebView',
      'OCR',
      'Medical Database',
    ],
  },
  {
    title: 'Tenjikai (Offline exhibition)',
    period: 'Aug 2023 - Nov 2023',
    bullets: [
      'Designed and launched a BLE receiver system to detect visitor locations and guide them with live coordinates and directional arrows to the nearest stall.',
      'All managed through an admin panel.',
      'Tech: Android, Java, BLE, Custom Map, Laravel (Backend).',
    ],
    links: {
      code: null,
      demo: 'https://www.youtube.com/watch?v=riCi_Tj7-b0&ab_channel=XORGeek',
    },
    tags: [
      'Android',
      'Java',
      'BLE',
      'Custom Map',
      'Laravel',
    ],
  },
  {
    title: 'Karuta Sound Player',
    period: 'Nov 2021 - Oct 2022',
    bullets: [
      'Low-latency audio playback app for Japanese karuta practice, tuned for precise timing and minimal playback delay.',
      'Optimized the audio pipeline and app startup for responsive playback on low-end Android devices.',
      'Tech: Android, low-latency audio system, performance optimization.',
    ],
    links: {
      code: null,
      demo: 'https://play.google.com/store/apps/details?id=jp.co.gincho.karuta.oto',
    },
    tags: [
      'Android',
      'Low-latency Audio',
      'Performance Optimization',
    ],
  },
  {
    title: 'Classic Golf App',
    period: 'Feb 2022 - Aug 2022',
    bullets: [
      'Contributed to a production-grade golf course app with smooth navigation and location-based features.',
      'Optimized rendering and location update handling to reduce battery drain during long on-course sessions.',
      'Tech: Native Android, Java, location-based services, performance optimization.',
    ],
    links: {
      code: null,
      demo: 'https://play.google.com/store/apps/details?id=hokkaido.classic.g.c',
    },
    tags: [
      'Native Android',
      'Java',
      'Location Services',
      'Performance Optimization',
    ],
  },
  {
    title: 'BLE Mesh App',
    period: 'Nov 2021 - Feb 2022',
    bullets: [
      'Built a BLE Mesh-based Android communication system enabling nurses to exchange messages without internet.',
      'Supports one-to-one and multi-node chat for rapid emergency response.',
      'Tech: Android, Java, Kotlin.',
    ],
    links: {
      code: null,
      demo: 'https://drive.google.com/file/d/1Ox7W-zfJ67mIM5rVOSPBCx_57QG7lcyX/view?usp=sharing',
    },
    tags: [
      'Android',
      'Java',
      'Kotlin',
      'BLE',
      'Mesh Network',
    ],
  },
  {
    title: 'Cover Master',
    period: 'Aug 2016 - Oct 2019',
    bullets: [
      'Flutter-based university assignment cover page generator with real-time PDF export.',
      'Implemented GetX for state management and MVC architecture for clean, maintainable code.',
    ],
    links: {
      code: 'https://github.com/massumm/covermaster',
      demo: null,
    },
    tags: [
      'Flutter',
      'Dart',
      'GetX',
      'MVC',
      'PDF Export',
    ],
  },
];
