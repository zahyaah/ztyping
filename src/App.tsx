import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Combobox, langs } from "./components/ui/combobox";
import { paragraphs } from "./assets/paragraphs";
import { words } from "./assets/words";
import { advanced } from "./assets/advanced";
import { useEffect, useState } from "react";

interface TextItem {
  id: number;
  text: string;
}

function App() {
    // -- STORYWEAVER MODE -- 
    const [paragraph, setParagraph] = useState<TextItem>({ id: 0, text: ""});
    const handleSetParagraph = () => setParagraph(paragraphs[Math.floor(Math.random()*10)]);
    useEffect(() => {
        handleSetParagraph(); 
    }, []);

    // -- WORDJUMBLE MODE -- 
    const [wordsList, setWordsList] = useState<string>("");
    const handleWordsList = () => setWordsList(words[Math.floor(Math.random() * 10)]);

    // -- LEXICONLABYRINTH MODE -- 
    const [advancedMode, setAdvancedMode] = useState<TextItem>({ id: 0, text: ""});
    const handleAdvancedMode = () => setAdvancedMode(advanced[Math.floor(Math.random() * 10)]);

    // -- SYNTAXSPRINT MODE --
    // const [syntax, setSyntax] = useState(); 
    const [selectedLanguage, setSelectedLanguage] = useState<string>("")

    // StoryWeaver mode, WordJumble mode, LexiconLabyrinth mode, SyntaxSprint mode
    return (
        <div className="bg-dingding min-h-screen w-screen flex flex-col items-center">
            <div className="h-24 w-full flex justify-center items-center">
                <h1 className="text-4xl font-mono font-bold">type master</h1>
            </div>

            <Tabs defaultValue="storyweaver" className="w-3/4" onValueChange={(value) => {
                if (value === "storyweaver") handleSetParagraph(); 
                if (value === "wordjumble") handleWordsList();
                if (value === "lexiconlabyrinth") handleAdvancedMode(); 
            }}>
                <TabsList>
                    <TabsTrigger value="storyweaver">StoryWeaver</TabsTrigger>
                    <TabsTrigger value="wordjumble">WordJumble</TabsTrigger>
                    <TabsTrigger value="lexiconlabyrinth">LexiconLabyrinth</TabsTrigger>
                    <TabsTrigger value="syntaxsprint">SyntaxSprint</TabsTrigger>
                </TabsList>

                <TabsContent value="storyweaver">
                    <div className="h-44 w-3/4 flex justify-center items-center bg-white">
                        {paragraph.text.length > 100 ? paragraph.text.slice(0, 100) + "..." : paragraph.text}
                    </div>
                </TabsContent>
                <TabsContent value="wordjumble">
                    <div className="h-44 w-3/4 flex justify-center items-center bg-white">
                        {wordsList.length > 100 ? wordsList.slice(0, 100) + "..." : wordsList}
                    </div>
                </TabsContent>
                <TabsContent value="lexiconlabyrinth">
                    <div className="h-44 w-3/4 flex justify-center items-center bg-white">
                        {advancedMode.text.length > 100 ? advancedMode.text.slice(0, 100) + "..." : advancedMode.text}
                    </div>
                </TabsContent>
                <TabsContent value="syntaxsprint">
                  <Combobox val={selectedLanguage} func={setSelectedLanguage} />
                  {langs.filter(lang => lang.value === selectedLanguage).map(lang => (
                    <div key={lang.value}>{lang.label}</div>
                  ))}
                </TabsContent>
            </Tabs>
            

            

        </div>
    )
}

export default App; 
