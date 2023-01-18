import { useEffect, useState } from "react";

function App() {
  const [textForSpeech, setTextForSpeech] = useState("");
  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    let speech = new SpeechSynthesisUtterance();
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = "en-US";
    setSpeaker(speech);

    return () => {
      setSpeaker(null);
    };
  }, []);

  function handleOnChange(event) {
    setTextForSpeech(event.target.value);
  }

  function convertTextToSpeech() {
    speaker.text = textForSpeech;
    speechSynthesis.speak(speaker);
  }

  return (
    <div>
      <input onChange={handleOnChange} value={textForSpeech} />
      <button onClick={convertTextToSpeech}>
        Convert input text into Speech
      </button>
    </div>
  );
}

export default App;
