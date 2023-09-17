import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyAvYBiGiqVlunBsuOhheOhsQ5iR3l60cks",
    authDomain: "blocksidian-7b83e.firebaseapp.com",
    projectId: "blocksidian-7b83e",
    storageBucket: "blocksidian-7b83e.appspot.com",
    messagingSenderId: "69561955459",
    appId: "1:69561955459:web:f17eb1da38dd5a1fcb57b6",
    measurementId: "G-01HFXTJQ32",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const db = getFirestore(app);

  const [username, setUsername] = useState("Username");
  const [userId, setUserId] = useState("");
  const [globalEvents, setGlobalEvents] = useState([]);

  useEffect(() => {
    // Función para obtener todos los eventos
    const getAllEvents = async () => {
      try {
        const eventsCollection = collection(db, "events");
        const eventsSnapshot = await getDocs(eventsCollection);

        const events = [];
        eventsSnapshot.forEach((doc) => {
          events.push({ id: doc.id, ...doc.data() });
        });

        return events;
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
        return [];
      }
    };

    async function fetchEvents() {
      try {
        const events = await getAllEvents();
        const formattedEvents = events.map(formatEvent);
        setGlobalEvents(formattedEvents);
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
      }
    }

    fetchEvents();

    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUsername(userData.username);
          setUserId(user.uid);
        }
      }
    };

    fetchUserData();

    const handleBeforeUnload = () => {
      fetchUserData();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Función para formatear un objeto de evento
  const formatEvent = (event) => {
    const formattedEvent = {
      id: event.id,
      image: event.imageURL || "https://placehold.jp/1200x720.png",
      name: event.name,
      date: formatDate(event.date),
      hour: formatHour(event.date),
      place: event.place,
      placeURL: event.placeURL,
      href: "/home",
      availability: true,
    };
    return formattedEvent;
  };

  // Función para formatear la fecha (ejemplo: "30/08/2023")
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Función para formatear la hora (ejemplo: "09:00 PM")
  const formatHour = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  /* const globalEvents = [
    {
      image: "https://placehold.jp/1200x720.png",
      name: "Burnout Syndromes",
      date: "30/08/2023",
      hour: "09:00 PM",
      place: "Estadio akron",
      placeURL: "https://goo.gl/maps/NZmy5AqvYz7aBEVH8",
      href: "/home",
      availability: true,
    },
    {
      image: "",
      name: "BTS",
      date: "10/09/2023",
      hour: "09:00 PM",
      place: "Auditorio Nacional",
      placeURL: "https://goo.gl/maps/BBmemcZsnKztkXTY7",
      href: "/home",
      availability: false,
    },
    {
      image: "",
      name: "The Weeknd",
      date: "14/12/2023",
      hour: "05:00 PM",
      place: "Auditorio Telmex",
      placeURL: "https://goo.gl/maps/5DjN4iirdye7nTLS6",
      href: "/home",
      availability: true,
    },
  ]; */

  const myEvents = [
    {
      image: "https://placehold.jp/1200x720.png",
      name: "Junior H",
      date: "22/08/2023",
      hour: "09:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Angeles Azules",
      date: "22/08/2023",
      hour: "06:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Julion Alvarez",
      date: "29/07/2023",
      hour: "02:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
  ];

  const popularEvents = [
    {
      image: "https://placehold.jp/1200x720.png",
      name: "Julion Alvarez",
      date: "22/08/2023",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Angeles Azules",
      date: "22/08/2023",
      hour: "06:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
    {
      image: "",
      name: "Angeles Azules",
      date: "30/07/2023",
      hour: "06:00 PM",
      place: "Palenque FENADU",
      placeURL: "https://goo.gl/maps/pncs4PF9Ku6aKGm87",
      href: "/home",
    },
  ];

  //check if is logged
  const [checkedLogin, setCheckedLogin] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        globalEvents,
        myEvents,
        popularEvents,
        analytics,
        db,
        userId,
        username,
        checkedLogin,
        setCheckedLogin,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
