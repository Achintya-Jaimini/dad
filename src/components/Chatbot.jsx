import { useState } from "react";
import "./chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
  from: "bot",
  text: "Welcome! I am Chef Aditya Jaimini's virtual assistant. I would be delighted to share insights about his culinary journey, leadership experience, awards, hospitality expertise, and contributions to the industry."
}
  ]);
  const [input, setInput] = useState("");

  const getReply = (msg) => {
  const q = msg.toLowerCase();

  if (q.includes("who") || q.includes("name")) {
    return "Chef Aditya Jaimini is an internationally recognized culinary leader, hospitality executive, mentor, food safety expert, and award-winning chef with more than 25 years of experience in the hospitality industry. Throughout his distinguished career, he has held leadership positions with some of the world's most respected hospitality organizations, including Taj Hotels, InterContinental Hotels Group (IHG), Radisson Hotels, Delhi International Airport Limited, and Marriott International. He currently serves as Executive Chef at Marriott in Pleasanton, California.";
  }

  if (q.includes("experience") || q.includes("career")) {
    return "Chef Aditya brings over two and a half decades of experience in culinary operations, hospitality leadership, food and beverage management, concept development, food safety implementation, and talent development. His career began with the prestigious Taj Group of Hotels as a Management Trainee and evolved into leadership positions across luxury hotels, international hospitality brands, airport hospitality operations, and global culinary initiatives.";
  }

  if (q.includes("marriott")) {
    return "Chef Aditya currently serves as Executive Chef at Marriott in Pleasanton, California. In this role, he oversees culinary operations, menu innovation, food quality standards, guest experiences, team development, and operational excellence while continuing to showcase his expertise in global cuisine.";
  }

  if (q.includes("taj")) {
    return "Chef Aditya began his professional journey with the renowned Taj Group of Hotels, one of India's most prestigious hospitality organizations. During his tenure, he developed strong foundations in culinary excellence, luxury hospitality, food production, and operational leadership.";
  }

  if (q.includes("airport") || q.includes("diali")) {
    return "Before relocating to the United States, Chef Aditya served as Head of Hospitality at Delhi International Airport Limited (DIAL), one of India's largest and busiest international airports. In this role, he oversaw large-scale hospitality operations, service standards, food and beverage programs, and guest experience initiatives.";
  }

  if (q.includes("award") || q.includes("recognition")) {
    return "Chef Aditya has received numerous national and international honors throughout his career. Shortly after arriving in the United States, he was recognized as the Best International Chef in the USA for 2022. He was also awarded Chef of the Year by the Association of Hospitality Professionals in 2014. Additionally, his restaurant concepts and culinary innovations have received multiple Times Food Awards.";
  }

  if (q.includes("spice art")) {
    return "One of Chef Aditya's most celebrated achievements was conceptualizing and developing Spice Art, an Indian specialty restaurant that quickly became one of Delhi's most acclaimed dining destinations. Within months of opening, Spice Art received the Times Food Award for 'Noteworthy Newcomer' and later earned the title of Best North Indian Restaurant in Delhi for four consecutive years.";
  }

  if (q.includes("cuisine") || q.includes("food")) {
    return "Chef Aditya is passionate about Indian, Mediterranean, and Italian cuisine. His culinary philosophy combines authentic traditions with modern innovation, creating memorable dining experiences that celebrate both heritage and creativity.";
  }

  if (q.includes("education") || q.includes("ihm")) {
    return "Chef Aditya is an alumnus of the Institute of Hotel Management (IHM), Bhopal. His education laid the foundation for a career that would eventually span luxury hospitality, culinary leadership, food safety systems, mentorship, and international recognition.";
  }

  if (q.includes("food safety")) {
    return "Chef Aditya is a certified Lead Auditor for Food Safety Management Systems and has successfully led food safety implementation programs at major hospitality organizations. His expertise includes ISO 22000 standards, HACCP principles, quality assurance systems, compliance management, and operational excellence in large-scale food service environments.";
  }

  if (q.includes("mentor") || q.includes("teaching") || q.includes("student")) {
    return "Chef Aditya is widely respected as a mentor and educator. He has conducted workshops, guest lectures, masterclasses, and training programs for leading hospitality institutions across India. As Culinary Mentor at Jagran Lake University and a frequent speaker at hospitality forums, he has helped shape the next generation of culinary professionals.";
  }

  if (q.includes("judge") || q.includes("jury")) {
    return "Chef Aditya has served as a jury member and judge for numerous prestigious culinary competitions, including Culinary Arts India, Food Service India Challenges, Chef Culinary Challenge Awards, US Cranberry culinary events, and several national chef competitions. His expertise and reputation have made him a sought-after evaluator of culinary talent.";
  }

  if (q.includes("leader") || q.includes("leadership")) {
    return "Throughout his career, Chef Aditya has successfully led large culinary teams, managed major food and beverage operations, launched award-winning restaurant concepts, mentored aspiring chefs, and driven innovation across hospitality organizations. His leadership style combines operational discipline, creativity, and a commitment to developing future talent.";
  }

  if (q.includes("bush") || q.includes("president")) {
    return "Chef Aditya has been involved in managing prestigious state banquets and hospitality events for world leaders and dignitaries, including events involving U.S. President George W. Bush hosted by India's then Prime Minister Dr. Manmohan Singh and other dignitaries such as Bill Clinton and Hillary Clinton. Such responsibilities reflect the trust placed in his expertise at the highest levels of hospitality.";
  }

  if (q.includes("vikas khanna") || q.includes("collaboration")) {
    return "Chef Aditya has collaborated with renowned chefs, including celebrity chef Vikas Khanna, on major hospitality and culinary events. These collaborations have showcased his ability to work alongside some of the industry's most respected figures while contributing his own unique culinary perspective.";
  }

  if(q.includes("clinton") || q.includes("clinton") || q.includes("bill clinton")) {
    return "Chef Aditya has been involved in managing prestigious state banquets and hospitality events for world leaders and dignitaries, including events involving U.S. President George W. Bush hosted by India's then Prime Minister Dr. Manmohan Singh and other dignitaries such as Bill Clinton and Hillary Clinton. Such responsibilities reflect the trust placed in his expertise at the highest levels of hospitality.";
  }

  if (q.includes("celebrated chefs")) {
    return "Chef Aditya was featured in the book 'Celebrated Chefs of India,' which highlights distinguished culinary professionals who have made significant contributions to the industry. He has also collaborated with renowned chefs including celebrity chef Vikas Khanna on major hospitality and culinary events.";
  }

  if (q.includes("community") || q.includes("charity") || q.includes("cancer")) {
    return "Beyond professional achievements, Chef Aditya has contributed meaningfully to society. He developed specialized recipes for children battling cancer in collaboration with Rajiv Gandhi Cancer Institute and has supported initiatives focused on nutrition, education, mentorship, and community development.";
  }

  if (q.includes("research") || q.includes("paper")) {
    return "Chef Aditya has contributed to hospitality education through academic research. He published a paper titled 'Need for Revamping Culinary Training Practices in Hotel Management Institutes: A Perspective of Professional Chefs of Delhi NCR,' reflecting his commitment to advancing culinary education and professional development.";
  }

  if (q.includes("major achievements") || q.includes("highlights")) { 
    return "Chef Aditya Jaimini's major achievements include: conceptualizing and developing the award-winning Spice Art restaurant; leading culinary operations at Marriott International; serving as Head of Hospitality at Delhi International Airport Limited; receiving numerous awards such as Best International Chef in the USA (2022) and Chef of the Year (2014); mentoring aspiring chefs through workshops and guest lectures; serving as a judge for prestigious culinary competitions; managing state banquets for world leaders; collaborating with renowned chefs like Vikas Khanna; being featured in 'Celebrated Chefs of India'; contributing to community initiatives; and publishing academic research on culinary education.";
  }

  if(q.includes("summary") || q.includes("overview") || q.includes("about you")) {  
    return "Chef Aditya Jaimini is an award-winning Executive Chef, hospitality leader, mentor, food safety expert, and culinary innovator with more than 25 years of international experience. He has held leadership positions with prestigious hospitality organizations such as Taj Hotels, InterContinental Hotels Group (IHG), Radisson Hotels, Delhi International Airport Limited, and Marriott International. Chef Aditya is known for his culinary expertise in Indian, Mediterranean, and Italian cuisine, as well as his contributions to culinary education and mentorship. He has received numerous awards and recognition for his work in the hospitality industry.";
  }

  if (q.includes("projects")) {
    return "Chef Aditya has been involved in several notable projects throughout his career, including: conceptualizing and launching Spice Art, an award-winning Indian specialty restaurant; leading culinary operations and menu innovation at Marriott International; overseeing hospitality operations at Delhi International Airport Limited; developing food safety management systems for major hospitality organizations; conducting workshops and guest lectures for culinary students; serving as a judge for prestigious culinary competitions; managing state banquets for world leaders; collaborating with renowned chefs like Vikas Khanna on major culinary events; and contributing to community initiatives focused on nutrition and education.";
  }

  if (q.includes("media")) {
    return "Chef Aditya has been featured in various media outlets and publications throughout his career. He was featured in the book 'Celebrated Chefs of India,' which highlights distinguished culinary professionals who have made significant contributions to the industry. Additionally, his work and achievements have been covered by major news outlets, culinary magazines, and hospitality industry publications, showcasing his influence and impact on the culinary world.";
  }

  return "Chef Aditya Jaimini is an award-winning Executive Chef, hospitality leader, mentor, food safety expert, and culinary innovator with more than 25 years of international experience. You may ask about his career journey, Marriott role, Taj Hotels experience, leadership positions, awards, food safety expertise, mentorship activities, culinary specialties, community contributions, research publications, or major achievements in the hospitality industry.";
};

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botMsg = { from: "bot", text: getReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            Ask About Me
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}