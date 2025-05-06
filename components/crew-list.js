export default function CrewList() {
  const crew = [
    { name: "JOHNMARK MHENGA IYOO", role: "PRODUCER/DIRECTOR" },
    { name: "Dr Ali Garba", role: "Executive Producer" },
    { name: "Chike Nwoffiah", role: "Consulting Producer" },
    { name: "John Agba", role: "Associate Producer" },
    { name: "Ahmed Saleh", role: "Associate Producer" },
    { name: "KABIRU BUHARI", role: "LOCATION MANAGER/CORDINATOR" },
    { name: "CHIA PAULENS", role: "D.O.P" },
    { name: "EMMANUEL PETER", role: "Camera Technician" },
    { name: "OSAGIE EMMANUEL", role: "Cinematographer" },
    { name: "Archibong Edem Ekpo", role: "Camera operator IV" },
    { name: "JUDE", role: "ART DIRECTOR II" },
    { name: "SADIQ ABUBAKAR", role: "PRODUCTION MANAGER" },
    { name: "MERCY MODOM", role: "MAKEUP ARTIST" },
    { name: "HELEN MOSES", role: "MAKUP ASSISTANT" },
    { name: "DZEVER E. SOPHIA (SOPHIES TALES)", role: "SCRIPT SUPERVISOR/CONTINUITY" },
    { name: "RAPHAEL TERSEER", role: "CONTINUITY ASSISTANT" },
    { name: "ZWALNAN VONGDAP NIMMAK (ZWALLY)", role: "SOUND" },
    { name: "FRESHMAN TAMARAUKETE SOLIDS", role: "PROPERTY MANAGER" },
    { name: "SETH HENRY SAMUEL", role: "GAFFER" },
    { name: "ABUH ONUCHE (ONUSKID)", role: "BTS & STILL PHOTO" },
    { name: "IENGEM JANE TERSEER", role: "WALFARE" },
    { name: "MELABA MOSES", role: "ADMINITRATOR" },
    { name: "VIVIAN KUMAWUESE BOIKYAA", role: "COSTUME" },
    { name: "MICHAEL IYOO", role: "PRODUCTION ASSISTANT/ACTOR" },
    { name: "NOAH AZA", role: "PRODUCTION ASSISTANT 1" },
    { name: "ABRAHAM TONDO (BEEG EYES)", role: "PRODUCTION ASSISTANT 2" },
    { name: "SOLOMON HUNDU CHAFA (K-HUSH)", role: "PRODUCTION ASSISTANT 3" },
    { name: "EKWA DANIEL KING", role: "PRODUCTION ASSISTANT 4" },
    { name: "Sonia Iwanger Iorkyaa", role: "PRODUCTION ASSISTANT 5" },
  ]

  return (
    <div className="cast-grid">
      {crew.map((person, index) => (
        <div key={index} className="cast-card hover:shadow-md transition-shadow">
          <h3 className="font-bold text-base  uppercase md:text-sm truncate">{person.name}</h3>
          <p className="text-gray-600 text-sm md:text-xs">{person.role}</p>
        </div>
      ))}
    </div>
  )
}
