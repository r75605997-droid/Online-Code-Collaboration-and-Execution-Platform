import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

const Room = () => {
  const { roomId } = useParams();
const navigate = useNavigate();
  
  const [language, setLanguage] = useState("javascript");
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(16);
  const [code, setCode] = useState(`function greet() {
  console.log("Hello Rashi!");
}

greet();`);
  const editorRef = useRef(null);
  const [output, setOutput] = useState("Your program output will appear here...");
  const [isRunning, setIsRunning] = useState(false);
  
  const copyRoomId = () => {
  console.log("Button Clicked");

  navigator.clipboard.writeText(roomId);

  toast.success("Room ID Copied!");
};

const runCode = () => {
  setIsRunning(true);
  setOutput("Running...");

  setTimeout(() => {
    setOutput(`Code executed successfully!

Hello Rashi 👋

Language: ${language === "cpp" ? "C++" : language}`);
    setIsRunning(false);
  }, 2000);
};

const copyCode = async () => {
  if (!editorRef.current) return;

  const code = editorRef.current.getValue();

  await navigator.clipboard.writeText(code);

  toast.success("Code Copied Successfully!");
};
const downloadCode = () => {
  if (!editorRef.current) return;

  const code = editorRef.current.getValue();

  let extension = "txt";

  if (language === "javascript") extension = "js";
  if (language === "python") extension = "py";
  if (language === "java") extension = "java";
  if (language === "cpp") extension = "cpp";

  const blob = new Blob([code], { type: "text/plain" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = `code.${extension}`;

  a.click();

  URL.revokeObjectURL(url);

  toast.success("Code Downloaded!");
};

const clearOutput = () => {
  setOutput("Your program output will appear here...");
  toast.success("Output Cleared!");
};

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold text-blue-500">
        Code Room
      </h1>

      <p className="mt-6 text-xl">
        Room ID:
      </p>

      <div className="mt-4 flex items-center gap-4">

  <div className="rounded-xl bg-slate-800 px-6 py-4 text-lg font-mono text-cyan-400">
    {roomId}
  </div>

  <button
    onClick={copyRoomId}
    className="rounded-lg bg-slate-700 px-4 py-3 transition hover:bg-slate-600"
  >
    📋 Copy
  </button>

</div>


      <div className="mt-8 flex w-full max-w-6xl items-center justify-between px-6">

  {/* Language Selector */}
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-white outline-none"
  >
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
    <option value="cpp">C++</option>
    <option value="java">Java</option>
  </select>

  {/* Theme Selector */}
  <select
    value={editorTheme}
    onChange={(e) => setEditorTheme(e.target.value)}
    className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-white outline-none"
  >
    <option value="vs-dark">🌙 Dark</option>
    <option value="light">☀️ Light</option>
  </select>

  <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2">

  <button
    onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
    className="rounded bg-slate-700 px-2 hover:bg-slate-600"
  >
    A-
  </button>

  <span>{fontSize}px</span>

  <button
    onClick={() => setFontSize((prev) => Math.min(prev + 2, 30))}
    className="rounded bg-slate-700 px-2 hover:bg-slate-600"
  >
    A+
  </button>

</div>

  <button
    onClick={runCode}
    disabled={isRunning}
    className="rounded-lg bg-blue-600 px-6 py-2 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-600"
  >
    {isRunning ? "Running..." : "▶ Run Code"}
  </button>

  <button
    onClick={copyCode}
    className="rounded-lg bg-slate-700 px-6 py-2 font-semibold transition hover:bg-slate-600"
  >
    📋 Copy Code
  </button>

  <button
    onClick={downloadCode}
    className="rounded-lg bg-green-600 px-6 py-2 font-semibold transition hover:bg-green-700"
  >
    📥 Download Code
  </button>

  <button
    onClick={() => navigate("/dashboard")}
    className="rounded-lg bg-red-600 px-6 py-2 font-semibold transition hover:bg-red-700"
  >
    🚪 Leave Room
  </button>

</div>
      <div className="mt-10 w-full max-w-6xl px-6">
  <Editor
  height="70vh"
  onMount={(editor) => (editorRef.current = editor)}
  language={language}
  value={code}
  onChange={(value) => setCode(value || "")}
  theme={editorTheme}
  options={{
  fontSize: fontSize,
}}
/>
</div>

<div className="mt-8 w-full max-w-6xl px-6">

  <div className="mb-3 flex items-center justify-between">
  <h2 className="text-xl font-semibold">
    Output
  </h2>

  <button
    onClick={clearOutput}
    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700"
  >
    🧹 Clear
  </button>
</div>

  <div className="h-40 rounded-xl border border-slate-700 bg-slate-800 p-4 font-mono text-green-400">
  {output}
</div>

<div className="mt-4 flex justify-between text-sm text-slate-400">
  <p>Characters: {code.length}</p>

  <p>Lines: {code.split("\n").length}</p>
</div>

</div>

    </div>
  );
};

export default Room;