const blogs = [
    {
      id: 1,
      title: "The Trick for Left and Right Shift Operations",
      short: "Hey Everyone! Look What I Learned and Recognized While Revisiting Java Concepts",
      content: `
      <p>Hey everyone! Look what I learned and recognized while revisiting my <strong>Java concepts</strong>. While going through the bitwise shift operators topic, I noticed a simple yet powerful mathematical pattern...</p>
      
      <p>I’m not sure if this trick has been widely recognized before, but I found that it provides <strong>a quick way to compute shift operations without manual binary conversion or writing code</strong>.</p>
      
      <p>Discovering such patterns not only makes coding more intuitive but also deepens my understanding... <strong>explore more about Java, coding principles, and continue my journey in technology</strong>. They push me to <strong>dive deeper into the world of tech and innovation</strong>.</p>

      <h2>The Trick for Left and Right Shift Operations</h2>
      <p>For any number <strong>X</strong>, when performing a left or right shift by <strong>N</strong> bits:</p>
      <ul>
        <li><strong>Right Shift</strong> (X >> N) → Divide the number by 2^N and take only the integer part.</li>
        <li><strong>Left Shift</strong> (X << N) → Multiply the number by 2^N.</li>
      </ul>

      <p>This eliminates the need for tedious bitwise calculations, offering a straightforward way to determine shift results instantly.</p>

      <h3>Example Calculations</h3>
      <h4>Right Shift Examples</h4>
      <ol>
        <li>Finding <strong>32 >> 2</strong></li>
        <ul>
          <li>2^2 = 4</li>
          <li>32 ÷ 4 = 8</li>
          <li>Result: 32 >> 2 = 8 </li>
        </ul>
      </ol>
      <h4>Left Shift Examples</h4>
      <ol>
        <li>Finding <strong>32 << 2</strong></li>
        <ul>
          <li>2^2 = 4</li>
          <li>32 x 4 = 128</li>
          <li>Result: 32 << 2 =128 </li>
        </ul>
      </ol>
    `,
    image:"./trick.png"
      
    },
    
    {
      id: 2,
      title: "Why Do We Need Java?",
      short: "We already have C, a procedural language, and C++, an object-oriented language, so why was there a need for yet another language like Java? To answer this, let’s dive into the history of programming and how Java became essential",
      content: `<p>We already have C, a procedural language, and C++, an object-oriented language, so why was there a need for yet another language like Java? To answer this, let’s dive into the history of programming and how Java became essential.

<p>In the early days, data in businesses such as hotels and accounting firms was managed manually, which was difficult and inefficient. To improve this, developers created desktop applications using languages like Visual basic and FoxPro. However, this approach had a significant drawback: every time an organization added a new desktop, the application needed to be installed individually on each machine.</p>

<p>Then came the concept of LAN (Local Area Network) or intranet, which introduced the idea of client-server architecture. This allowed applications to run locally across connected desktops. But this was still limited to local networks, not global access.</p>

<p>This is where Java comes in — often referred to as the "Bahubali" of programming languages because of its versatility. If you want your web applications to be accessible globally, you need a WAN (Wide Area Network), which is the Internet. Web applications are typically built using HTML and CSS, but for data interaction and processing, compiled code is required.</p>

<p>The challenge with languages like C and C++ is that they are machine-dependent. After compilation, they generate an executable file (e.g., .exe), but these files vary between operating systems. This meant that a program compiled on one system may not run on another without modification.</p>

<p>Java, however, solved this problem by introducing the concept of platform independence. Instead of generating a .exe file, Java produces a .class file that can be executed on any operating system with the Java Virtual Machine (JVM). Java is a machine-independent language, making it ideal for creating dynamic web applications accessible globally via the Internet.</p>`,
      image:"./java.png"
    },

    {
      id: 3,
      title: "Why Your Resume Deserves Time and Effort",
      short: "Today, I want to talk about one of the most important aspects of our graduation – the Resume",
      content: `<p>Today, I want to talk about one of the most important aspects of our graduation – the Resume. It’s a one or two-page document that highlights our skills and academic achievements, and it plays a key role in landing a job and showcasing our abilities.</p>

<p>Some students might think, "It's no big deal. I’ll make my resume just before placements; it won’t take more than three hours." But here’s the thing – how can you summarize your three years of college experience, learning, and activities in just a few hours? In my opinion, that’s not possible.</p>

<p>A perfect resume takes time. It’s something that can shape your future, so it’s important to build it gradually. Learn new skills each semester, and update your resume accordingly. This way, when the time comes, you’ll have a strong and well-prepared resume that truly reflects your journey.</p>

<p>Also, by creating your resume step-by-step, you will have a deep understanding of every detail because you’ve built it yourself. Don’t just copy-paste from others. Work on your own projects and add them to your resume so you can confidently explain them to the recruitment team.</p>

<p>Take your time and make your resume wisely.`,
       image:"./efforts.png"
   
    },
  ];
  
  
