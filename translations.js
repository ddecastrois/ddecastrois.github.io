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
        details_tasks_title: "Tareas asignadas",
        details_description_title: "Descripción del proyecto",
        details_back_to_portfolio: "← Volver al portafolio",
        details_team_label: "Equipo",
        details_engine_label: "Motor",
        details_platform_label: "Plataforma",
        details_tech_title: "Tecnologías Utilizadas",
        
        // Inside the Crow's Nest
        project_crows_nest_title: "Inside the crow's nest",
        project_crows_nest_description: "Proyecto final del HND en programación de videojuegos, desarrollado durante 9 meses en un equipo de 16 personas formado por programadores, artistas y diseñadores. El juego, creado con Unreal Engine, tiene una duración aproximada de hora y media y busca capturar la esencia de los survival horror clásicos como los primeros Resident Evil. Incluye controles tipo tanque, cámaras fijas, enemigos, puzles y gestión de inventario. A pesar de su enfoque nostálgico, se han modernizado tanto el control como la presentación para ofrecer una experiencia accesible y atractiva tanto para nuevos jugadores como para fans de los clásicos.",
        details_crows_AI: "IA Avanzada",
        details_crows_description_p1: "Inside the Crow's Nest es el proyecto más ambicioso hasta la fecha, desarrollado como trabajo final del HND en Programación de Videojuegos en la ESAT. Durante 9 meses intensos, trabajé junto a un equipo multidisciplinario de 16 personas para crear una experiencia de survival horror que rinde homenaje a los clásicos del género a la vez que introduce elementos modernos.",
        details_crows_description_p2: "El juego transporta a los jugadores a una atmósfera tensa y claustrofóbica, donde cada decisión puede significar la diferencia entre la supervivencia y la muerte. Inspirado en títulos icónicos como los primeros Resident Evil, hemos recreado la esencia del survival horror clásico con controles tipo tanque, cámaras fijas estratégicamente posicionadas y una gestión de recursos que mantiene al jugador en constante tensión.",
        details_crows_description_p3: "Con una duración aproximada de hora y media, el juego ofrece una experiencia completa que incluye combate, resolución de puzzles complejos y exploración atmosférica y una narrativa contada a través del entorno y los documentos encontrados.",
        details_crows_subtitle: "Survival Horror Clásico Reimaginado",
        details_crows_duration_value: "9 meses",
        details_crows_team_value: "16 personas",
        details_crows_engine_value: "Unreal Engine 5",
        details_crows_platform_value: "PC / Steam",
  

        // Graphics Engine
        project_engine_title: "Motor gráfico - 2025",
        project_engine_description: "Motor gráfico desarrollado desde cero. Implementa técnicas avanzadas como forward y deferred rendering, sistema de sombras, portales, físicas mediante el uso de la librería Bullet, scripting en Lua y una arquitectura ECS con jerarquías. Además, incluye herramientas de edición integradas con ImGui y un sistema de hilos para tareas pesadas.",

        details_engine_tasks_title: "Tareas asignadas",
        details_engine_tasks_intro: "Mi rol principal se centró en la parte de más alto nivel como puede ser el input o un sistema de hilos, aunque también participé en algunas características como la iluminación o la carga de assets",

        details_engine_input_title: "Sistema de input",
        details_engine_input_text: "Apoyandose en la librería glfw se ha realizado un sistema de input para ratón y teclado que te permite capturar tanto las diferentes teclas como el movimiento del ratón y el offset de la rueda",

        details_engine_jobs_title: "Sistema de trabajos",
        details_engine_jobs_text: "Se ha implementado un sistema de hilos en los que realizar aquellas tareas complejas de forma que la aplicación se mantenga usable en todo momento. Con el objetivo de que estos hilos puedan devolver el resultado de cualquier acción, se ha hecho uso de funciones templatizadas, generalizando el código lo máximo posible.",

        details_engine_lua_title: "Scripting en LUA",
        details_engine_lua_text: "Se han creado e integrado las bases de un sistema de scripting con LUA. Este sistema es escalable, de forma que en un futuro se podría trabajar en el y permitir al usuario realizar acciones en LUA directamente, sin tener que utilizar C++.",

        details_engine_physics_title: "Integración de físicas",
        details_engine_physics_text: "Se ha integrado la API Bullet en el motor, permitiendo crear un sistema de físicas con los objetos en escena. Esta librería permite tener tanto objetos físicos estáticos como \"Rigidbodies\" y controla las interacciones entre los mismos.",

        details_engine_ecs_title: "Jerarquías de objetos con ECS",
        details_engine_ecs_text: "Una tarea muy importante realizada en el motor ha sido la abstracción del mismo de forma que sea sencillo de utilizar por el usuario. Es por ello que se ha creado un sistema de objetos que nos permite realizar por debajo todas las acciones necesarias para controlar las diferentes entidades existentes y sus respectivas propiedades, mientras que el usuario tan solo debe pensar en qué tipo de objeto le interesa en cada momento. Este sistema también abstrae las físicas integradas de la librería, permitiendo al usuario crear un objeto con físicas de forma sencilla.",

        details_engine_editor_title: "Editor realizado con ImGui",
        details_engine_editor_text: "Con intención de facilitar la depuración del motor así como la creación de escenas en el mismo se ha desarrollado un editor haciendo uso de ImGui. Desde este editor podremos ver la jerarquía de objetos en la escena así como editar sus propiedades básicas, ya sea su componente de \"Transform\", sus propiedades físicas o el tipo de luz y sus propiedades en caso de serlo.",

        details_engine_save_title: "Prototipo de sistema de guardado de escenas",
        details_engine_save_text: "Se ha creado una versión inicial de un sistema de guardado que nos permite almacenar en memoria tanto el componente de Transform de los objetos como las propiedades de las diferentes luces. De esta forma se nos permite crear una escena desde el editor sin necesidad de configurar dichos componentes desde código.",

        details_engine_title: "Motor gráfico",

        details_engine_subtitle: "Motor gráfico desarrollado como trabajo académico",
        details_engine_duration_value: "9 meses",
        details_engine_team_value: "2 personas",



        
        // Meta Avatars
        project_avatars_title: "Meta Avatars en red - 2023",
        project_avatars_description: "Proyecto de realidad virtual desarrollado como parte del Trabajo de Fin de Máster, centrado en la integración de avatares de Meta en un entorno multijugador con interacción. Utilizando Proton y tecnología de Meta para VR, se implementó una sala virtual compartida donde varios usuarios pueden conectarse y comunicarse a través de sus avatares, con capacidad para interactuar con el entorno. El objetivo fue estudiar la viabilidad de utilizar entornos de realidad virtual como alternativa más humana y accesible a las sesiones psicológicas tradicionales, evitando la frialdad de las videollamadas sin requerir presencialidad.",

        details_vr_subtitle: "Experiencia social en VR usando avatares de Meta",

        details_vr_duration_value: "6 meses",
        details_vr_team_value: "1 persona",

        details_vr_tasks_intro: "Este proyecto lo realicé en solitario, por lo que me encargué de la integración de los avatares de Meta así como de la infraestructura de red para que dos usuarios puedan conectarse a la misma sala.",

        details_vr_networking_title: "Infraestructura de red",
        details_vr_networking_text: "Trabajé con Photon PUN para Unity para establecer la conexión entre diferentes usuarios.",

        details_vr_avatars_title: "Avatares",
        details_vr_avatars_text: "En el momento de realizar este trabajo se había lanzado de forma oficial el nuevo sdk de avatares de Meta. El objetivo de este trabajo era ver cuanta diferencia existía entre los avatares básicos sin expresividad facial y la nueva versión que contaba con un mejor movimiento y expresividad gracias a las Meta Quest Pro.",


        
        // TFG Game
        project_tfg_title: "TFG Game",
        project_tfg_description: "Videojuego 2D de plataformas desarrollado en Unity como parte del Trabajo de Fin de Grado, en colaboración con otro desarrollador y utilizando Git para control de versiones. El juego incluye enemigos con inteligencia artificial, un sistema de sigilo, loot e inventario, así como efectos de sonido y mecánicas de combate. Se centró en crear una experiencia fluida y completa desde el diseño hasta la implementación final.",

        details_platformer_subtitle: "Juego 2D de plataformas",
        details_platformer_duration_value: "6 meses",
        details_platformer_team_value: "2 personas",

        details_platformer_tasks_intro: "Mi rol principal se centró en la programación del movimiento del jugador, sistemas de IA y combate y la integración de animaciones, aunque ambos miembros del equipo participamos en la totalidad del proyecto.",

        details_platformer_ai_title: "IA y combate",
        details_platformer_ai_text: "Creación de una máquina de estados para establecer los comportamientos de los diferentes tipos de enemigos, así como una máquina especial para el jefe final.",

        details_platformer_animations_title: "Integración de animaciones",
        details_platformer_animations_text: "Se ha utilizado el \"Animator\" de Unity para establecer una máquina de estados de animaciones tanto de los enemigos como del personaje principal.",

        details_platformer_movement_title: "Movimiento del jugador",
        details_platformer_movement_text: "Se desarrolló el sistema de movimiento 2D del jugador, incluyendo salto y plataformas que atravesar o sobre las que saltar.",

        
        // Soul Apart
        project_soul_title: "Game Jam - Soul apart",
        project_soul_description: "Proyecto desarrollado en 48 horas como proyecto para una game jam, en colaboración con diseñadores y artistas. Se trata de un juego 3D tipo bullet hell creado en Unity, en el que el jugador, con muy poca vida, debe esquivar ataques enemigos y devolver aquellos proyectiles que lo permiten para derrotar a una bruja.",
        details_jam_subtitle: "3D Bullet hell hecho para la Global Game Jam",

        details_jam_duration_value: "48 horas",
        details_jam_team_value: "6 personas",

        details_jam_tasks_intro: "Mi rol principal se centró en el movimiento principal del personaje y varios de los ataques presentes en pantalla. Además, también participé en el prototipado de varias mecánicas que acabaron siendo descartadas con la intención de simplificar el bucle de juego.",

        details_jam_movement_title: "Movimiento del jugador",
        details_jam_movement_text: "Lo primero que se hizo en el proyecto fue conseguir una primera iteración del movimiento con la que poder avanzar en el juego. Se empezó con una primera versión simple y se le añadió movimiento con aceleración en las siguientes iteraciones",

        details_jam_attacks_title: "Ataques en pantalla",
        details_jam_attacks_text: "El bucle principal del juego consiste en esquivar y devolver los ataques. La parte central de mi trabajo consistió en desarrollar los ataques que se decidían desde diseño. Estos ataques consisten principalmente en proyectiles lanzados con patrones concretos.",

        details_jam_cut_title: "Mecánicas descartadas",
        details_jam_cut_text: "A lo largo del desarrollo se realizaron varios ataques que el jugador debería esquivar así como barriles que caerían con botín para el jugador. Estas mecánicas, aunque estaban terminadas de desarrollar se acabaron descartando con el objetivo de que el juego sea más claro.",


        
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
        project_steam: "Steam page →",
        details_tasks_title: "Assigned Tasks",
        details_description_title: "Project Description",
        details_back_to_portfolio: "← Back to portfolio",
        details_duration_label: "Duration",
        details_team_label: "Team",
        details_engine_label: "Engine",
        details_platform_label: "Platform",
        details_tech_title: "Technologies Used",

        
        // Inside the Crow's Nest
        project_crows_nest_title: "Inside the crow's nest",
        project_crows_nest_description: "Final project of the HND in game programming, developed over 9 months in a team of 16 people consisting of programmers, artists and designers. The game, created with Unreal Engine, has an approximate duration of an hour and a half and seeks to capture the essence of classic survival horror games like the first Resident Evil. It includes tank controls, fixed cameras, enemies, puzzles and inventory management. Despite its nostalgic approach, both control and presentation have been modernized to offer an accessible and attractive experience for both new players and fans of the classics.",
        details_crows_tasks_intro: "My main role focused on enemy programming and the save system, as well as contributing to level scripting. We worked with Perforce from the beginning for version control, which allowed smooth collaboration and conflict management.",
        details_crows_AI: "Advanced AI",
        details_crows_AI_text: "Enemies were created with complex and distinct behaviors depending on the type of enemy, using behavior trees, C++ programming, and Blueprints. Great emphasis was placed on parameterization so that the design team could easily work with and iterate on them.",
        details_crows_physics_title: "Physics-based Animation System",
        details_crows_physics_text: "To give enemies more variety and realism, physics-based animations were used to enhance player feedback. This made enemy reactions vary depending on where the attack came from.",
        details_crows_save_title: "Save System",
        details_crows_save_text: "A manual save system was implemented with the option of autosave. This system ties into the level streaming system to store the state of each room, enemies, and puzzle progress.",
        details_crows_script_title: "Participation in Level Scripting",
        details_crows_script_text: "Together with the designers, I helped with level scripting, implementing specific events and assisting with puzzle behavior.",
        details_crows_description_p1: "Inside the Crow's Nest is my most ambitious project to date, developed as the final project for the HND in Game Programming at ESAT. Over the course of 9 intense months, I worked with a multidisciplinary team of 16 people to create a survival horror experience that pays tribute to the classics of the genre while introducing modern elements.",
        details_crows_description_p2: "The game transports players to a tense and claustrophobic atmosphere, where every decision can mean the difference between survival and death. Inspired by iconic titles like the early Resident Evil games, we recreated the essence of classic survival horror with tank controls, strategically positioned fixed cameras, and resource management that keeps the player under constant pressure.",
        details_crows_description_p3: "With an approximate duration of an hour and a half, the game offers a complete experience that includes combat, complex puzzle solving, atmospheric exploration, and a narrative told through environmental storytelling and found documents.",
        details_crows_subtitle: "Classic Survival Horror Reimagined",

        details_crows_duration_value: "9 months",
        details_crows_team_value: "16 people", 
  
        
        // Graphics Engine
        project_engine_title: "Graphics Engine - 2025",
        project_engine_description: "Graphics engine developed from scratch. Implements advanced techniques such as forward and deferred rendering, shadow system, portals, physics using the Bullet library, Lua scripting and an ECS architecture with hierarchies. It also includes integrated editing tools with ImGui and a threading system for heavy tasks.",

        details_engine_tasks_title: "Assigned Tasks",
        details_engine_tasks_intro: "My main role focused on higher-level systems such as input handling and a job system, although I also contributed to features like lighting and asset loading.",

        details_engine_input_title: "Input System",
        details_engine_input_text: "Using the GLFW library, an input system for mouse and keyboard was implemented that captures both key presses and mouse movement, including scroll wheel offset.",

        details_engine_jobs_title: "Job System",
        details_engine_jobs_text: "A multithreaded job system was implemented to offload complex tasks while keeping the application responsive. To allow these threads to return results, templated functions were used to generalize the logic as much as possible.",

        details_engine_lua_title: "LUA Scripting",
        details_engine_lua_text: "The foundations of a scripting system using LUA were created and integrated. This system is scalable, making it possible to extend it so users can eventually define behaviors in LUA directly instead of using C++.",

        details_engine_physics_title: "Physics Integration",
        details_engine_physics_text: "The Bullet API was integrated into the engine, enabling the creation of physical interactions for scene objects. The library supports both static and dynamic rigidbodies and manages their collisions.",

        details_engine_ecs_title: "Object Hierarchies with ECS",
        details_engine_ecs_text: "A key task in the engine was to abstract internal logic so it could be used easily by end users. A component-based object system was created to manage entities and their properties, so users only need to choose the type of object they want to use. This abstraction also wraps the physics engine, allowing simple creation of physics-enabled objects.",

        details_engine_editor_title: "Editor Built with ImGui",
        details_engine_editor_text: "To make debugging and scene creation easier, a custom editor was developed using ImGui. From this editor, users can view the scene hierarchy and edit basic properties like transforms, physics parameters, or light types and attributes.",

        details_engine_save_title: "Scene Saving Prototype",
        details_engine_save_text: "An early version of a save system was developed to store object transform components and light properties in memory. This allows creating a scene entirely from the editor without configuring these components in code.",

        details_engine_title: "Graphics Engine",
        details_engine_subtitle: "Graphics engine developed as an academic project",

        details_engine_duration_value: "9 months",
        details_engine_team_value: "2 people",


        
        // Meta Avatars
        project_avatars_title: "Networked Meta Avatars - 2023",
        project_avatars_description: "Virtual reality project developed as part of the Master's Thesis, focused on the integration of Meta avatars in a multiplayer environment with interaction. Using Proton and Meta technology for VR, a shared virtual room was implemented where multiple users can connect and communicate through their avatars, with the ability to interact with the environment. The goal was to study the feasibility of using virtual reality environments as a more human and accessible alternative to traditional psychological sessions, avoiding the coldness of video calls without requiring physical presence.",
        details_vr_subtitle: "VR Social Experience using Meta avatars",
        
        details_vr_duration_value: "6 months",
        details_vr_team_value: "1 person",

        details_vr_tasks_intro: "I developed this project solo, handling both the integration of Meta avatars and the network infrastructure allowing two users to connect to the same room.",

        details_vr_networking_title: "Network Infrastructure",
        details_vr_networking_text: "I used Photon PUN for Unity to establish connections between different users.",

        details_vr_avatars_title: "Avatars",
        details_vr_avatars_text: "At the time of this project, Meta had just officially released their new avatar SDK. The goal of this work was to compare the basic avatars without facial expressions against the new version featuring enhanced movement and expressiveness thanks to the Meta Quest Pro.",

        
        // TFG Game
        project_tfg_title: "TFG Game",
        project_tfg_description: "2D platform game developed in Unity as part of the Bachelor's Final project, in collaboration with another developer and using Git for version control. The game includes enemies with artificial intelligence, a stealth system, loot and inventory, as well as sound effects and combat mechanics. It focused on creating a smooth and complete experience from design to final implementation.",
        details_platformer_subtitle: "2D Platformer Game",

        details_platformer_duration_value: "6 months",
        details_platformer_team_value: "2 people",

        details_platformer_tasks_intro: "My main role focused on player movement programming, AI and combat systems and animation integration, although both members of the team participated in the entire project.",

        details_platformer_ai_title: "AI and Combat",
        details_platformer_ai_text: "Created a finite state machine to define behaviors for different types of enemies, along with a dedicated machine for the final boss.",

        details_platformer_animations_title: "Animation Integration",
        details_platformer_animations_text: "Used Unity's Animator to set up a state machine for animations of both the enemies and the main character.",

        details_platformer_movement_title: "Player Movement",
        details_platformer_movement_text: "Developed the 2D movement system for the player, including jumping and platform interaction.",

        
        // Soul Apart
        project_soul_title: "Game Jam - Soul apart",
        project_soul_description: "Project developed in 48 hours as an entry for a game jam, in collaboration with designers and artists. It's a 3D bullet hell game created in Unity, where the player, with very little health, must dodge enemy attacks and return those projectiles that allow it to defeat a witch.",
        details_jam_subtitle: "3D Bullet hell made for the Global Game Jam",
        details_jam_duration_value: "48 hours",
        details_jam_team_value: "6 people",

        details_jam_tasks_intro: "My main role focused on the player’s core movement and several on-screen attacks. I also contributed to the prototyping of mechanics that were ultimately discarded to simplify the game loop.",

        details_jam_movement_title: "Player Movement",
        details_jam_movement_text: "The first task was to implement a basic version of the character's movement so development could progress. Starting from a simple version, acceleration-based movement was added in later iterations.",

        details_jam_attacks_title: "On-Screen Attacks",
        details_jam_attacks_text: "The game loop revolves around dodging and returning enemy attacks. My main task was to develop the attacks defined by design, consisting mostly of projectile patterns.",

        details_jam_cut_title: "Cut Mechanics",
        details_jam_cut_text: "During development, several mechanics were created such as dodgable attacks and loot barrels. Although fully implemented, they were removed to make the game loop more streamlined and clear.",


        
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
        mini_minimal_description: "Minimalist arcade game with geometric aesthetics, controlled only with the controller joysticks. The player manages two characters at once to defend a central crystal: one with a shield and another one which shoots, combining action and coordination.",
        
        // Bullet Hell
        mini_bullet_title: "Bullet hell",
        mini_bullet_description: "Space bullet hell prototype developed in Unity, focused on wave-based combat with increasingly demanding shooting patterns. Combines classic arcade gameplay with an intense rhythm.",
        
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