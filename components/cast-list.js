export default function CastList() {
  const cast = [
    { name: "Seun Olakunle Otuyo", role: "Seun" },
    { name: "Sena Zawua Doosuun Grace", role: "Sena" },
    { name: "Wuese Doose Emmanuella Kaaba", role: "Wuese" },
    { name: "Baba Gbileh", role: "Baba Gbileh" },
    { name: "Terna", role: "Terna" },
    { name: "Zaki Tarter Melaba Moses", role: "Zaki Tarter" },
    { name: "Wanyoda Hwande Samuel Orjime", role: "Wanyoda" },
    { name: "Bemdoo Aondoaver Benedict Mela", role: "Bemdoo" },
    { name: "Msendoo Bonase Msendoo Torkwase", role: "Msendoo" },
    { name: "Pinem Solomon Manasseh", role: "Pinem" },
    { name: "Spy Orsar Denen Fabian", role: "Spy" },
    { name: "Tartenger", role: "Tartenger" },
    { name: "SUNNY NDUR", role: "Akpesue" },
    { name: "Terkumbo Tyavmo (D.M.X)", role: "Ortaver" },
    { name: "Elder Tyokaa Atue", role: "Elder Tyokaa Atue" },
    { name: "Tor Tar", role: "Tor Tar" },
    { name: "Kabiru Buhari", role: "Mr. Bayo (Seun's Dad)" },
    { name: "Princess Daniel", role: "Mama Seun" },
    { name: "Pinega Lumngo", role: "Seun's Aunty" },
    { name: "Mandiki Faith", role: "Seun's Sister" },
    { name: "Eden Tekka", role: "Driver" },
    { name: "Bike Man", role: "Bike Man" },
    { name: "Iengem Jane Terseer", role: "Cashier" },
    { name: "Mr. Abur (head of Vigilante)", role: "Mr. Abur" },
    { name: "VICTORIA GBAORGA", role: "Bar Girl" },
    { name: "Sonia Iwanger Iorkyaa", role: "Girl fetching water" },
  ]

  return (
    <div className="cast-grid">
      {cast.map((person, index) => (
        <div key={index} className="cast-card hover:shadow-md transition-shadow">
          <h3 className="font-bold text-base md:text-lg truncate">{person.name}</h3>
          <p className="text-gray-600 text-sm md:text-base">as {person.role}</p>
        </div>
      ))}
    </div>
  )
}
