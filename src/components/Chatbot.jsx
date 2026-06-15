import { useMemo, useState } from "react";
import "./chatbot.css";

const introMessage =
  "Welcome! I am Chef Aditya Jaimini's virtual assistant. Ask me about his culinary journey, leadership experience, awards, hospitality expertise, projects, media features, or how to get in touch.";

const knowledgeBase = [
  {
    title: "Profile",
    keywords: ["who", "name", "profile", "about", "summary", "overview", "chef aditya", "aditya jaimini"],
    text: "Chef Aditya Jaimini is an internationally recognized culinary leader, hospitality executive, mentor, food safety expert, and award-winning chef with more than 25 years of experience in the hospitality industry. He has held leadership roles with Taj Hotels, InterContinental Hotels Group, Radisson Hotels, Delhi International Airport Limited, and Marriott International.",
  },
  {
    title: "Current role",
    keywords: ["marriott", "current", "pleasanton", "executive chef", "usa"],
    text: "Chef Aditya currently serves as Executive Chef at Marriott in Pleasanton, California, where he oversees culinary operations, menu innovation, food quality standards, guest experiences, team development, and operational excellence.",
  },
  {
    title: "Career",
    keywords: ["experience", "career", "journey", "leadership", "leader"],
    text: "His career spans culinary operations, hospitality leadership, food and beverage management, restaurant concept development, food safety implementation, and talent development. He began with the Taj Group of Hotels as a Management Trainee and grew into leadership positions across luxury hotels, airport hospitality operations, and international culinary initiatives.",
  },
  {
    title: "Taj Hotels",
    keywords: ["taj", "taj hotels", "begin", "started"],
    text: "Chef Aditya began his professional journey with the Taj Group of Hotels, one of India's most prestigious hospitality organizations. That experience built his foundation in culinary excellence, luxury hospitality, food production, and operational leadership.",
  },
  {
    title: "Airport hospitality",
    keywords: ["airport", "dial", "delhi international airport", "hospitality head"],
    text: "Before relocating to the United States, Chef Aditya served as Head of Hospitality at Delhi International Airport Limited, where he oversaw large-scale hospitality operations, service standards, food and beverage programs, and guest experience initiatives.",
  },
  {
    title: "Awards",
    keywords: ["award", "recognition", "honor", "best international chef", "chef of the year", "times food"],
    text: "Chef Aditya has received national and international honors, including Best International Chef in the USA for 2022 and Chef of the Year from the Association of Hospitality Professionals in 2014. His restaurant concepts and culinary innovations have also received multiple Times Food Awards.",
  },
  {
    title: "Spice Art",
    keywords: ["spice art", "restaurant", "concept", "north indian", "noteworthy newcomer"],
    text: "One of his celebrated achievements was conceptualizing and developing Spice Art, an Indian specialty restaurant in Delhi. It received the Times Food Award for Noteworthy Newcomer and later earned Best North Indian Restaurant in Delhi for four consecutive years.",
  },
  {
    title: "Cuisine",
    keywords: ["cuisine", "food", "indian", "mediterranean", "italian", "dish", "cooking"],
    text: "Chef Aditya is passionate about Indian, Mediterranean, and Italian cuisine. His culinary philosophy combines authentic traditions with modern innovation to create memorable dining experiences.",
  },
  {
    title: "Education",
    keywords: ["education", "ihm", "bhopal", "college", "institute"],
    text: "Chef Aditya is an alumnus of the Institute of Hotel Management, Bhopal. His education helped shape a career in luxury hospitality, culinary leadership, food safety systems, mentorship, and international recognition.",
  },
  {
    title: "Food safety",
    keywords: ["food safety", "haccp", "iso", "iso 22000", "auditor", "quality"],
    text: "Chef Aditya is a certified Lead Auditor for Food Safety Management Systems. His expertise includes ISO 22000 standards, HACCP principles, quality assurance, compliance management, and operational excellence in large-scale food service environments.",
  },
  {
    title: "Mentorship",
    keywords: ["mentor", "teaching", "student", "workshop", "lecture", "masterclass", "training"],
    text: "Chef Aditya is widely respected as a mentor and educator. He has conducted workshops, guest lectures, masterclasses, and training programs for leading hospitality institutions, and has helped shape the next generation of culinary professionals.",
  },
  {
    title: "Judging",
    keywords: ["judge", "jury", "competition", "culinary arts india", "food service india", "cranberry"],
    text: "He has served as a jury member and judge for prestigious culinary competitions, including Culinary Arts India, Food Service India Challenges, Chef Culinary Challenge Awards, US Cranberry culinary events, and national chef competitions.",
  },
  {
    title: "Dignitary events",
    keywords: ["bush", "president", "clinton", "hillary", "bill clinton", "state banquet", "dignitary"],
    text: "Chef Aditya has been involved in prestigious state banquets and hospitality events for world leaders and dignitaries, including events involving U.S. President George W. Bush, Dr. Manmohan Singh, Bill Clinton, and Hillary Clinton.",
  },
  {
    title: "Collaborations",
    keywords: ["vikas khanna", "collaboration", "celebrated chefs", "book"],
    text: "Chef Aditya has collaborated with renowned chefs, including Vikas Khanna, on major hospitality and culinary events. He was also featured in Celebrated Chefs of India, a book highlighting distinguished culinary professionals.",
  },
  {
    title: "Community",
    keywords: ["community", "charity", "cancer", "rajiv gandhi", "nutrition"],
    text: "Beyond professional achievements, Chef Aditya has contributed to community initiatives. He developed specialized recipes for children battling cancer in collaboration with Rajiv Gandhi Cancer Institute and has supported work focused on nutrition, education, and mentorship.",
  },
  {
    title: "Research",
    keywords: ["research", "paper", "academic", "culinary training"],
    text: "Chef Aditya has contributed to hospitality education through academic research, including a paper titled Need for Revamping Culinary Training Practices in Hotel Management Institutes: A Perspective of Professional Chefs of Delhi NCR.",
  },
  {
    title: "Projects and media",
    keywords: ["projects", "media", "featured", "press", "news"],
    text: "His notable work includes launching Spice Art, leading culinary operations at Marriott, overseeing hospitality at Delhi International Airport, developing food safety systems, conducting culinary education programs, judging competitions, managing state banquets, and appearing in media and hospitality publications.",
  },
  {
    title: "Contact",
    keywords: ["contact", "reach", "get in touch", "email", "phone", "book"],
    text: "You can contact Chef Aditya Jaimini through the contact page on this website for booking, collaboration, media, or other specific inquiries.",
  },
];

const stopWords = new Set([
  "a",
  "about",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "can",
  "do",
  "does",
  "for",
  "from",
  "has",
  "he",
  "his",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "of",
  "on",
  "or",
  "tell",
  "that",
  "the",
  "to",
  "what",
  "when",
  "where",
  "with",
  "you",
]);

const tokenize = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word));

const findRelevantKnowledge = (question) => {
  const normalizedQuestion = question.toLowerCase();
  const words = tokenize(question);

  return knowledgeBase
    .map((entry) => {
      const keywordScore = entry.keywords.reduce((score, keyword) => {
        return normalizedQuestion.includes(keyword) ? score + 4 : score;
      }, 0);
      const text = `${entry.title} ${entry.keywords.join(" ")} ${entry.text}`.toLowerCase();
      const wordScore = words.reduce((score, word) => {
        return text.includes(word) ? score + 1 : score;
      }, 0);

      return { ...entry, score: keywordScore + wordScore };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};

const buildLocalReply = (question) => {
  const matches = findRelevantKnowledge(question);

  if (!matches.length) {
    return "I do not have enough detail on that yet. I can help with Chef Aditya Jaimini's career, awards, culinary work, leadership roles, food safety expertise, mentorship, projects, media, or contact information.";
  }

  const answer = matches.map((match) => match.text).join(" ");
  const contactHint =
    " For a specific booking, media, collaboration, or personal inquiry, the contact page is the best next step.";

  return answer.includes("contact page") ? answer : `${answer}${contactHint}`;
};

const getRemoteReply = async (messages, question) => {
  const apiUrl = import.meta.env.VITE_CHAT_API_URL;

  if (!apiUrl) {
    return null;
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: question,
      messages,
      context: knowledgeBase.map(({ title, text }) => ({ title, text })),
    }),
  });

  if (!response.ok) {
    throw new Error("The LLM service is unavailable right now.");
  }

  const data = await response.json();
  return data.reply || data.message || data.text || null;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: introMessage }]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const suggestedPrompts = useMemo(
    () => ["Career highlights", "Awards", "Spice Art", "Food safety", "Contact"],
    []
  );

  const sendMessage = async (message = input) => {
    const cleanMessage = message.trim();

    if (!cleanMessage || isThinking) return;

    const userMsg = { from: "user", text: cleanMessage };
    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setInput("");
    setIsThinking(true);

    try {
      const remoteReply = await getRemoteReply(nextMessages, cleanMessage);
      const botMsg = { from: "bot", text: remoteReply || buildLocalReply(cleanMessage) };
      setMessages((currentMessages) => [...currentMessages, botMsg]);
    } catch {
      const botMsg = {
        from: "bot",
        text: `${buildLocalReply(cleanMessage)} I could not reach the online LLM service, so I answered from the site's built-in knowledge base.`,
      };
      setMessages((currentMessages) => [...currentMessages, botMsg]);
    } finally {
      setIsThinking(false);
    }
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
            Ask About Chef Aditya Jaimini
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            {isThinking && <div className="msg bot thinking">Thinking...</div>}
          </div>

          <div className="chat-suggestions" aria-label="Suggested questions">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                disabled={isThinking}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isThinking}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button onClick={() => sendMessage()} disabled={isThinking}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
