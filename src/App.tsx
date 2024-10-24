import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Combobox, langs } from "./components/ui/combobox";
import { Input } from "./components/ui/input";
import { paragraphs } from "./assets/paragraphs";
import { words } from "./assets/words";
import { advanced } from "./assets/advanced";
import { algorithms } from "./assets/languages";
import { useEffect, useState } from "react";

interface TextItem {
    id: number;
    text: string;
}

function App() {
    // State for different modes
    const [paragraph, setParagraph] = useState<TextItem>({ id: 0, text: "" });
    const [wordsList, setWordsList] = useState<string>("");
    const [advancedMode, setAdvancedMode] = useState<TextItem>({ id: 0, text: "" });
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [algo, setAlgo] = useState<string>("");

    // Handlers for setting random content
    const handleSetParagraph = () => setParagraph(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
    const handleWordsList = () => setWordsList(words[Math.floor(Math.random() * words.length)]);
    const handleAdvancedMode = () => setAdvancedMode(advanced[Math.floor(Math.random() * advanced.length)]);

    // Initialize StoryWeaver mode on component mount
    useEffect(() => {
        handleSetParagraph();
    }, []);

    useEffect(() => {
        const selectedLang = langs.find(lang => lang.value === selectedLanguage);
        setLanguage(selectedLang ? selectedLang.label : "");
    }, [selectedLanguage])

    useEffect(() => {
        const chosen = algorithms.find(alg => alg.language === language);
        console.log('Chosen one ', chosen);
        const randomIndex = Math.floor(Math.random() * 5);
        console.log(randomIndex);
        const randomAlgo = chosen?.examples[randomIndex];
        console.log(randomAlgo);
        if (randomAlgo) {
            setAlgo(randomAlgo.code);
        } else {
            setAlgo("");
        }
    }, [language])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen w-full flex flex-col items-center">
                <div className="absolute top-4 right-4">
                    <ModeToggle />
                </div>
                <div className="h-24 w-full flex justify-center items-center">
                    <h1 className="text-4xl font-mono font-serif">ztyping</h1>
                </div>
                <div className="w-full max-w-6xl">
                    <Tabs defaultValue="storyweaver" className="w-full" onValueChange={(value) => {
                        if (value === "storyweaver") handleSetParagraph();
                        if (value === "wordjumble") handleWordsList();
                        if (value === "lexiconlabyrinth") handleAdvancedMode();
                    }}>
                        <div className="flex justify-between items-center">
                            <TabsList className="justify-center">
                                <TabsTrigger value="storyweaver">StoryWeaver</TabsTrigger>
                                <TabsTrigger value="wordjumble">WordJumble</TabsTrigger>
                                <TabsTrigger value="lexiconlabyrinth">LexiconLabyrinth</TabsTrigger>
                                <TabsTrigger value="syntaxsprint">SyntaxSprint</TabsTrigger>
                            </TabsList>
                            <div className="text-2xl font-serif">60/60</div>
                        </div>
                        
                        <TabsContent value="storyweaver">
                            <div className="h-[4.5em] w-full rounded-md text-4xl mt-6 mb-2 p-4 bg-background text-foreground border border-border overflow-hidden">
                                {paragraph.text}
                            </div>
                            <Input type="text" placeholder="start typing" />
                        </TabsContent>

                        <TabsContent value="wordjumble">
                            <div className="h-[4.5em] w-full rounded-md text-4xl mt-6 mb-2 p-4 bg-background text-foreground border border-border overflow-hidden">
                                {wordsList}
                            </div>
                            <Input type="text" placeholder="start typing" />
                        </TabsContent>

                        <TabsContent value="lexiconlabyrinth">
                            <div className="h-[4.5em] w-full rounded-md text-4xl mt-6 mb-2 p-4 bg-background text-foreground border border-border overflow-hidden">
                                {advancedMode.text}
                            </div>
                            <Input type="text" placeholder="start typing" />
                        </TabsContent>
                        
                        <TabsContent value="syntaxsprint">
                            <div className="h-fit w-full rounded-md p-4 mt-6 mb-2 bg-background text-foreground border border-border">
                                <Combobox val={selectedLanguage} func={setSelectedLanguage} />
                                
                                <div className="h-3/4 w-full rounded-md text-4xl mt-6 mb-2 p-4 bg-background text-foreground border border-border overflow-hidden">
                                    {algo}
                                </div>
                            </div>
                            <Input type="text" placeholder="start typing" />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
