import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        "Projects": "Projects",
        "About me": "About me",
        "about" : "I'm passionate about building <span>intuitive</span> and <span>efficient</span> web experiences.\nI thrive on <span>solving problems</span> with a blend of <span>logic</span> and <span>creativity</span>, always pushing myself to <span>improve</span> and <span>learn</span> more.\nWhen I'm not coding, you'll find me listening to music, playing piano, or reading.\nGot an <span>exciting project</span> in mind? Let's connect and create something amazing together!",
        "Contact": "Contact",
        //presentation
        "hi": "Hi there",
        "I am": "I'm",
        "I am a": "I am a Full Stack Developer",
        //projects
        "code": "Code",
        "preview": "Preview",
            //instago
        "instago_title": "Instago – A Full Stack Social Media",
        "instago_description": "Instago is a full stack social media platform with Google and guest sign-in, interactive posts with image uploads, and two dynamic feeds. One personalized and one general. Users can follow others, engage through likes and comments, and manage their profiles seamlessly.",
             //SnapTalk
        "snapTalk_title": "SnapTalk – Real Time Messaging App",
        "snapTalk_description": "SnapTalk is a full stack real time messaging app with secure authentication, a friend system, and instant chat powered by Socket.io. Users can share images, send GIFs, customize chats, and even generate AI powered images for a personalized experience.",
            //movieSpot
        "movieSpot_title": "MovieSpot – Explore Movies & Series",
        "movieSpot_description": "MovieSpot is a movie and series explorer that lets you browse trending, popular, and top-rated titles. View detailed movie pages with cast information, trailers, and similar recommendations. Search by genre, filter top-rated content, and explore actor filmographies. The UI is sleek, responsive, and supports multiple languages.",

        "Tech Stack": "Tech Stack",

        "contact_sub": "Got a project? Reach out!",
        "download": "Download"

    }
  },
  es: {
    translation: {
        "Projects": "Proyectos",
        "About me": "Sobre mí",
        "about": "Me apasiona construir experiencias web <span>intuitivas</span> y <span>eficientes</span>.\nDisfruto <span>resolviendo problemas</span> combinando <span>lógica</span> y <span>creatividad</span>, y siempre me esfuerzo por <span>mejorar</span> y <span>aprender</span> más.\nFuera del mundo del código, me encanta escuchar música, tocar el piano y leer.\n¿Tienes un <span>proyecto emocionante</span> en mente? ¡Conectemos y creemos algo increíble juntos!",
        "Contact": "Contacto",
        //presentation
        "hi": "Hola",
        "I am": "Soy",
        "I am a": "Soy un Desarrollador Full Stack",
        //projects
        "code": "Código",
        "preview": "Vista previa",
            //instago
        "instago_title": "Instago – Una Red Social Full Stack",
        "instago_description": "Instago es una plataforma de red social Full Stack con inicio de sesión mediante Google e invitado, publicaciones interactivas con carga de imágenes y dos feeds dinámicos: uno personalizado y otro general. Los usuarios pueden seguir a otros, interactuar con me gusta y comentarios, y gestionar sus perfiles sin problemas.",
            //SnapTalk
        "snapTalk_title": "SnapTalk – Aplicación de Mensajería en Tiempo Real",
        "snapTalk_description": "SnapTalk es una aplicación de mensajería en tiempo real Full Stack con autenticación segura, sistema de amigos y chat instantáneo impulsado por Socket.io. Los usuarios pueden compartir imágenes, enviar GIFs, personalizar chats e incluso generar imágenes con IA para una experiencia personalizada.",
            //movieSpot
        "movieSpot_title": "MovieSpot – Explora Películas y Series",
        "movieSpot_description": "MovieSpot es un explorador de películas y series que te permite navegar por títulos en tendencia, populares y mejor valorados. Consulta páginas detalladas con información del reparto, tráilers y recomendaciones similares. Busca por género, filtra contenido mejor valorado y explora filmografías de actores. La interfaz es moderna, responsive y admite múltiples idiomas.",

        "Tech Stack": "Tecnologías",


        "contact_sub": "¿Tienes un proyecto? ¡Contáctame!",
        "download": "Descargar"


        



    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
