const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({limit:"1mb"}));
app.use(express.static(path.join(__dirname, "public")));

const demoUsers = [
  {id:"you", name:"You", reviews:128, streak:7, points:940},
  {id:"maya", name:"Maya Patel", reviews:156, streak:12, points:1120},
  {id:"arjun", name:"Arjun Rao", reviews:143, streak:9, points:1010},
  {id:"sana", name:"Sana Khan", reviews:119, streak:6, points:875},
  {id:"dev", name:"Dev Mehta", reviews:98, streak:4, points:720}
];
let decks = [
  {id:"algorithms",name:"Algorithms",subject:"Computer Science",color:"violet",cards:[
    {id:"a1",q:"What is the time complexity of QuickSort?",a:"Average case: O(n log n). Worst case: O(n²), typically when pivots repeatedly create highly unbalanced partitions.",interval:1,repetitions:1,easeFactor:2.5,dueOffset:0},
    {id:"a2",q:"What is the time complexity of binary search?",a:"O(log n). Each comparison halves the remaining search interval. The input must be sorted.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"a3",q:"What data structure powers a BFS traversal?",a:"A queue (FIFO). It visits vertices level by level, making it useful for shortest paths in unweighted graphs.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"a4",q:"What is a stable sorting algorithm?",a:"A stable sort preserves the relative order of records with equal keys. Merge sort and insertion sort are stable.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"a5",q:"What is the space complexity of recursive DFS?",a:"O(V) in the worst case for the recursion stack, where V is the number of vertices.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"a6",q:"What is a hash collision?",a:"When two distinct keys map to the same hash table index. Common strategies include chaining and open addressing.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"a7",q:"What is the best-case time complexity of insertion sort?",a:"O(n), when the input is already sorted.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0}
  ]},
  {id:"os",name:"Operating Systems",subject:"Computer Science",color:"blue",cards:[
    {id:"o1",q:"What is a process?",a:"A program in execution, together with its current state, address space and allocated resources.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"o2",q:"What are the four conditions for deadlock?",a:"Mutual exclusion, hold and wait, no preemption, and circular wait.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"o3",q:"What is virtual memory?",a:"A memory-management technique that gives processes a large logical address space, using RAM and secondary storage.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0}
  ]},
  {id:"dbms",name:"DBMS Essentials",subject:"Computer Science",color:"green",cards:[
    {id:"d1",q:"What is database normalization?",a:"Organizing relational data to reduce redundancy and update anomalies by decomposing tables according to dependencies.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0},
    {id:"d2",q:"What does ACID stand for?",a:"Atomicity, Consistency, Isolation and Durability—the core properties of reliable database transactions.",interval:0,repetitions:0,easeFactor:2.5,dueOffset:0}
  ]}
];
let logs = [];
app.get("/api/decks",(req,res)=>res.json(decks));
app.put("/api/decks",(req,res)=>{ if(!Array.isArray(req.body.decks)) return res.status(400).json({error:"decks must be an array"}); decks=req.body.decks; res.json({ok:true}); });
app.post("/api/reviews",(req,res)=>{ const log={...req.body,createdAt:new Date().toISOString()}; logs.push(log); res.status(201).json(log); });
app.get("/api/leaderboard",(req,res)=>res.json(demoUsers.map(u=>({...u})).sort((a,b)=>b.points-a.points)));
app.get("/api/stats",(req,res)=>res.json({reviews:logs.length, decks:decks.length}));
app.get("*",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
app.listen(PORT,()=>console.log(`RecallRocket running at http://localhost:${PORT}`));