import { useParams } from "react-router-dom"

const facts = [
    {id: "1", fact: "Kenzo Tenma is a highly skilled Japanese neurosurgeon working in Germany. He starts off as a respected doctor in a prestigious hospital in Düsseldorf",},
    {id: "2", fact:"Tenma is portrayed as a compassionate and dedicated individual. He believes in the sanctity of life and values the well-being of his patients above all else.",},
    {id: "3", fact: "One of the central themes of the series revolves around Tenma's moral dilemma. He is faced with a decision to either save the life of a young boy named Johan Liebert or the mayor of the city, whose life is deemed more politically important. Tenma chooses to save Johan's life, which sets off a chain of events that unfolds throughout the series.",},
    {id: "4", fact: "After making his decision, Tenma becomes entangled in a complex web of conspiracies, murders, and moral ambiguity. He embarks on a journey to bring Johan to justice, as he realizes the extent of the havoc Johan wreaks on society.",},
    {id: "5", fact: "Kenzo Tenma is a highly intelligent and resourceful character. He uses his medical knowledge, deductive reasoning, and keen observation skills to navigate the dangerous world he finds himself in.",},
    {id: "6", fact: "Throughout the series, Tenma grapples with guilt, regret, and the consequences of his choices. He struggles with the idea that he may have unleashed a monster upon the world by saving Johan's life.",},
    {id: "7", fact: "As the series progresses, Tenma undergoes a transformation. He evolves from a dedicated doctor to a man on a mission, driven by a desire to stop Johan and protect those he cares about.",},
    {id: "8", fact: "While Tenma's primary skill is his medical expertise, he also demonstrates physical abilities when necessary. He is capable of defending himself and taking action when faced with danger.",},
    {id: "9", fact: "Tenma serves as the moral compass of the series. He consistently faces difficult choices and tries to navigate a morally gray world while adhering to his principles.",},
    {id: "10", fact: "The character of Kenzo Tenma embodies themes of redemption and sacrifice. He is willing to sacrifice his own safety and reputation to pursue justice and make amends for the consequences of his initial decision.",},
    {id: "11", fact: "Kenzo Tenma comes from a humble background. His parents ran a small clinic in Japan, and he was raised with a strong work ethic and a sense of responsibility.",},
    {id: "12", fact: "Tenma is widely recognized as a brilliant neurosurgeon. His skills and expertise in the medical field are exceptional, earning him the respect of his colleagues.",},
    {id: "13", fact: "In the series, Tenma develops a romantic relationship with Eva Heinemann, the daughter of the hospital director. Their relationship faces numerous challenges due to the events surrounding Johan Liebert.",},
    {id: "14", fact: "As a Japanese doctor working in Germany, Tenma is fluent in both Japanese and German. His language skills prove helpful in communicating with various characters throughout the series.",},
    {id: "15", fact: "Tenma avoids getting involved in politics or power struggles within the hospital, focusing solely on his medical duties. However, this changes after his encounter with Johan.",},
    {id: "16", fact: "As Tenma searches for Johan, he acquires investigative skills to dig deeper into the mystery surrounding Johan's past, his motives, and the secret organization he is affiliated with.",},
    {id: "17", fact: "Throughout the series, Tenma carries a heavy burden of guilt for the consequences of his choice to save Johan. His guilt drives him to make amends and find a way to stop Johan's reign of terror.",},
    {id: "18", fact: "Tenma often feels isolated and alone, especially as he delves deeper into the dark underbelly of society. He loses connections with friends and faces danger from both criminals and those who want to silence him.",},
    {id: "19", fact: "Dr. Becker, the chief of surgery at the hospital where Tenma works, serves as a mentor and role model for him. Tenma highly respects Becker's surgical skills and seeks his guidance at times.",},
    {id: "20", fact: "Throughout the series, Tenma faces numerous psychological challenges and traumas. He must navigate through intense emotional turmoil and maintain his sanity in the face of overwhelming circumstances.",},
    {id: "21", fact: "Despite witnessing the worst aspects of human nature, Tenma still retains his sympathy and compassion for others. He continues to save lives and help those in need whenever possible.",},
    {id: "22", fact: "Tenma is willing to put himself in harm's way to protect the people he cares about. He makes personal sacrifices to ensure their safety and well-being, even if it means risking his own life.",},
    {id: "23", fact: "As the series progresses, Tenma's physical appearance undergoes subtle changes. He grows a beard and wears glasses, altering his appearance to evade recognition and blend into different environments.",},
    {id: "24", fact: "Tenma's encounters with Johan and the various morally ambiguous characters in the series challenge his beliefs and make him question the nature of good and evil, right and wrong.",},
    {id: "25", fact: "Through his pursuit of justice and efforts to stop Johan, Tenma embarks on a journey of redemption. He seeks to rectify the consequences of his initial choice and bring closure to the chaos Johan has caused.",},
]

const Fact = () => {
    const param = useParams()
    const fact = facts.find(f => f.id === param.factId)

  return (
    <div> {fact?`Fact (${param.factId}): ${fact.fact}`:"unfortunately we don't have more information"} </div>
  )
}
export default Fact
