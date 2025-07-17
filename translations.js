const translations = {
    es: {
        // Navegación
        nav_home: "Inicio",
        nav_projects: "Proyectos", 
        nav_skills: "Habilidades",
        nav_about: "Sobre mí",
        nav_contact: "Contacto",

        
        // Hero Section
        hero_description: "Desarrollador de videojuegos con un HND en Programación de videojuegos por la ESAT, una carrera de informática y máster en inteligencia artificial por la UPV. Tengo experiencia desarrollando proyectos tanto personales como académicos tanto en Unreal Engine 5 como en Unity.",
        hero_btn_work: "Ver mi trabajo",
        hero_btn_contact: "Hablemos",
        
        // Proyectos principales
        projects_title: "Proyectos Destacados",
        projects_subtitle: "Una selección de mis trabajos más representativos",
        project_demo: "Ver demo →",
        project_steam: "Página de Steam →",
        
        // Inside the Crow's Nest
        project_crows_nest_title: "Inside the crow's nest",
        project_crows_nest_description: "Proyecto final del HND en programación de videojuegos, desarrollado durante 9 meses en un equipo de 16 personas formado por programadores, artistas y diseñadores. El juego, creado con Unreal Engine, tiene una duración aproximada de hora y media y busca capturar la esencia de los survival horror clásicos como los primeros Resident Evil. Incluye controles tipo tanque, cámaras fijas, enemigos, puzles y gestión de inventario. A pesar de su enfoque nostálgico, se han modernizado tanto el control como la presentación para ofrecer una experiencia accesible y atractiva tanto para nuevos jugadores como para fans de los clásicos.",
        details_crows_AI: "IA Avanzada",

        // Graphics Engine
        project_engine_title: "Graphics Engine",
        project_engine_description: "Motor gráfico desarrollado desde cero. Implementa técnicas avanzadas como forward y deferred rendering, sistema de sombras, portales, físicas mediante el uso de la librería Bullet, scripting en Lua y una arquitectura ECS con jerarquías. Además, incluye herramientas de edición integradas con ImGui y un sistema de hilos para tareas pesadas.",

        
        // Meta Avatars
        project_avatars_title: "Networked Meta Avatars",
        project_avatars_description: "Proyecto de realidad virtual desarrollado como parte del Trabajo de Fin de Máster, centrado en la integración de avatares de Meta en un entorno multijugador con interacción. Utilizando Proton y tecnología de Meta para VR, se implementó una sala virtual compartida donde varios usuarios pueden conectarse y comunicarse a través de sus avatares, con capacidad para interactuar con el entorno. El objetivo fue estudiar la viabilidad de utilizar entornos de realidad virtual como alternativa más humana y accesible a las sesiones psicológicas tradicionales, evitando la frialdad de las videollamadas sin requerir presencialidad.",
        
        // TFG Game
        project_tfg_title: "TFG Game",
        project_tfg_description: "Videojuego 2D de plataformas desarrollado en Unity como parte del Trabajo de Fin de Grado, en colaboración con otro desarrollador y utilizando Git para control de versiones. El juego incluye enemigos con inteligencia artificial, un sistema de sigilo, loot e inventario, así como efectos de sonido y mecánicas de combate. Se centró en crear una experiencia fluida y completa desde el diseño hasta la implementación final.",
        
        // Soul Apart
        project_soul_title: "Game Jam - Soul apart",
        project_soul_description: "Proyecto desarrollado en 48 horas como entrada para una game jam, en colaboración con diseñadores y artistas. Se trata de un juego 3D tipo bullet hell creado en Unity, en el que el jugador, con muy poca vida, debe esquivar ataques enemigos y devolver aquellos proyectiles que lo permiten para derrotar a una bruja.",
        
        // Otros proyectos
        other_projects_title: "Otros Proyectos",
        other_projects_subtitle: "Prototipos y proyectos secundarios",
        
        // FPS Prototype
        mini_fps_title: "First person shooter prototype",
        mini_fps_description: "Shooter en primera persona desarrollado en Unreal Engine 5, centrado en una IA avanzada para enemigos mediante Behavior Trees. El proyecto destaca por crear combates dinámicos y desafiantes, mejorando la inmersión del jugador con una inteligencia artificial realista.",
        
        // VR Shooter
        mini_vr_title: "VR Shooter minigame",
        mini_vr_description: "Prototipo de shooter arcade en realidad virtual desarrollado en Unity. Incluye mecánicas rápidas y un sistema de puntuación para ofrecer una experiencia competitiva y divertida en VR.",
        
        // Minimalist Game
        mini_minimal_title: "Juego minimalista",
        mini_minimal_description: "Juego arcade minimalista con estética geométrica, controlado únicamente con los joysticks del mando. El jugador maneja dos personajes a la vez para defender un cristal central: uno con escudo y otro con disparos, combinando acción y coordinación.",
        
        // Bullet Hell
        mini_bullet_title: "Bullet hell",
        mini_bullet_description: "Prototipo de bullet hell espacial desarrollado en Unity, centrado en combates por oleadas con patrones de disparo cada vez más exigentes. Combina jugabilidad arcade clásica con un ritmo intenso y progresivo.",
        
        // Multiplayer Pacman
        mini_pacman_title: "Multiplayer pacman",
        mini_pacman_description: "Prototipo multijugador inspirado en Pac-Man, desarrollado con Unity y Photon PUN.",
        
        // Mobile App
        mini_mobile_title: "Mobile app",
        mini_mobile_description: "Aplicación móvil desarrollada con Android Studio que mediante una API te permite acceder a un listado de juegos filtrando por nota y desarrollador.",
        
        // Habilidades
        skills_title: "Habilidades",
        skills_subtitle: "Herramientas y tecnologías que domino",
        skills_engines: "Game Engines",
        skills_programming: "Programación",
        
        // Sobre mí
        about_title: "Sobre mí",
        about_paragraph1: "Soy Daniel de Castro Isasi, un desarrollador de videojuegos con formación tanto técnica como académica. Tengo un HND en Programación de Videojuegos por la ESAT, una carrera de Informática y un Máster en Inteligencia Artificial por la UPV, lo que me ha proporcionado una base sólida tanto en desarrollo como en tecnologías emergentes.",
        about_paragraph2: "Mi experiencia abarca desde el desarrollo de motores gráficos desde cero hasta la creación de experiencias completas en realidad virtual. He trabajado con equipos multidisciplinarios de hasta 16 personas, utilizando herramientas como Unreal Engine 5, Unity, y tecnologías avanzadas como OpenGL y Bullet Physics. Mi proyecto más destacado, \"Inside the Crow's Nest\", fue desarrollado durante 9 meses y está disponible en Steam.",
        about_paragraph3: "Me gusta mucho el desarrollo de sistemas de gameplay así como IA que aporte vida, inmersión y desafío al jugador, y disfruto del desarrollo de un videojuego desde las fases de prototipado hasta la realización de los últimos perfiles y mejoras en los mismos.",
        
        // Contacto
        contact_title: "Contacto",
        contact_subtitle: "Hablemos",
        contact_description: "Estoy interesado en oportunidades de desarrollo de videojuegos y siempre abierto a conversaciones sobre la industria."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_projects: "Projects",
        nav_skills: "Skills", 
        nav_about: "About me",
        nav_contact: "Contact",
        
        // Hero Section
        hero_description: "Game developer with an HND in Game Programming from ESAT, a Computer Science degree and AI Master's from UPV. I have experience developing both personal and academic projects in Unreal Engine 5 and Unity.",
        hero_btn_work: "View my work",
        hero_btn_contact: "Let's talk",
        
        // Main Projects
        projects_title: "Featured Projects",
        projects_subtitle: "A selection of my most representative works",
        project_demo: "View demo →",
        project_steam: "Steam page→",
        
        // Inside the Crow's Nest
        project_crows_nest_title: "Inside the crow's nest",
        project_crows_nest_description: "Final project of the HND in game programming, developed over 9 months in a team of 16 people consisting of programmers, artists and designers. The game, created with Unreal Engine, has an approximate duration of an hour and a half and seeks to capture the essence of classic survival horror games like the first Resident Evil. It includes tank controls, fixed cameras, enemies, puzzles and inventory management. Despite its nostalgic approach, both control and presentation have been modernized to offer an accessible and attractive experience for both new players and fans of the classics.",
        details_crows_AI: "Advanced AI",
        
        // Graphics Engine
        project_engine_title: "Graphics Engine",
        project_engine_description: "Graphics engine developed from scratch. Implements advanced techniques such as forward and deferred rendering, shadow system, portals, physics using the Bullet library, Lua scripting and an ECS architecture with hierarchies. It also includes integrated editing tools with ImGui and a threading system for heavy tasks.",
        
        // Meta Avatars
        project_avatars_title: "Networked Meta Avatars",
        project_avatars_description: "Virtual reality project developed as part of the Master's Thesis, focused on the integration of Meta avatars in a multiplayer environment with interaction. Using Proton and Meta technology for VR, a shared virtual room was implemented where multiple users can connect and communicate through their avatars, with the ability to interact with the environment. The goal was to study the feasibility of using virtual reality environments as a more human and accessible alternative to traditional psychological sessions, avoiding the coldness of video calls without requiring physical presence.",
        
        // TFG Game
        project_tfg_title: "TFG Game",
        project_tfg_description: "2D platform game developed in Unity as part of the Bachelor's Thesis, in collaboration with another developer and using Git for version control. The game includes enemies with artificial intelligence, a stealth system, loot and inventory, as well as sound effects and combat mechanics. It focused on creating a smooth and complete experience from design to final implementation.",
        
        // Soul Apart
        project_soul_title: "Game Jam - Soul apart",
        project_soul_description: "Project developed in 48 hours as an entry for a game jam, in collaboration with designers and artists. It's a 3D bullet hell game created in Unity, where the player, with very little health, must dodge enemy attacks and return those projectiles that allow it to defeat a witch.",
        
        // Other Projects
        other_projects_title: "Other Projects",
        other_projects_subtitle: "Prototypes and secondary projects",
        
        // FPS Prototype
        mini_fps_title: "First person shooter prototype",
        mini_fps_description: "First-person shooter developed in Unreal Engine 5, focused on advanced AI for enemies using Behavior Trees. The project stands out for creating dynamic and challenging combat, improving player immersion with realistic artificial intelligence.",
        
        // VR Shooter
        mini_vr_title: "VR Shooter minigame",
        mini_vr_description: "Arcade shooter prototype in virtual reality developed in Unity. Includes fast mechanics and a scoring system to offer a competitive and fun VR experience.",
        
        // Minimalist Game
        mini_minimal_title: "Minimalist game",
        mini_minimal_description: "Minimalist arcade game with geometric aesthetics, controlled only with the controller joysticks. The player manages two characters at once to defend a central crystal: one with shield and another with shots, combining action and coordination.",
        
        // Bullet Hell
        mini_bullet_title: "Bullet hell",
        mini_bullet_description: "Space bullet hell prototype developed in Unity, focused on wave-based combat with increasingly demanding shooting patterns. Combines classic arcade gameplay with an intense and progressive rhythm.",
        
        // Multiplayer Pacman
        mini_pacman_title: "Multiplayer pacman",
        mini_pacman_description: "Multiplayer prototype inspired by Pac-Man, developed with Unity and Photon PUN.",
        
        // Mobile App
        mini_mobile_title: "Mobile app",
        mini_mobile_description: "Mobile application developed with Android Studio that through an API allows you to access a list of games filtering by rating and developer.",
        
        // Skills
        skills_title: "Skills",
        skills_subtitle: "Tools and technologies I master",
        skills_engines: "Game Engines",
        skills_programming: "Programming",
        
        // About Me
        about_title: "About me",
        about_paragraph1: "I'm Daniel de Castro Isasi, a game developer with both technical and academic training. I have an HND in Game Programming from ESAT, a Computer Science degree and a Master's in Artificial Intelligence from UPV, which has provided me with a solid foundation in both development and emerging technologies.",
        about_paragraph2: "My experience ranges from developing graphics engines from scratch to creating complete virtual reality experiences. I have worked with multidisciplinary teams of up to 16 people, using tools like Unreal Engine 5, Unity, and advanced technologies like OpenGL and Bullet Physics. My most notable project, \"Inside the Crow's Nest\", was developed over 9 months and is available on Steam.",
        about_paragraph3: "I really enjoy developing gameplay systems as well as AI that brings life, immersion and challenge to the player, and I enjoy the development of a video game from the prototyping phases to the completion of the latest profiles and improvements in them.",
        
        // Contact
        contact_title: "Contact",
        contact_subtitle: "Let's talk",
        contact_description: "I'm interested in game development opportunities and always open to conversations about the industry."
    }
};