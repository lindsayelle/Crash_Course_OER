'use client';
import { useParams } from 'next/navigation';
import { useState } from "react";

import styles from "@/styles/Learn.module.css";
import NoteBoxes from "@/components/NoteBoxes";
import Quiz from "@/components/Quiz";
import BackButton from "@/components/BackButton";

export default function LearnPage({ params }) {
  const { courseId } = useParams();
  const [highlightOn, setHighlightOn] = useState(true);
  let buttonLabel = "";
  let buttonClass = ""
  let markClass = "";

  if (highlightOn) {
    buttonLabel = "Hide Highlights";
    buttonClass += ` ${styles.highlightOn}`;
  }
  else {
    buttonLabel = "Show Highlights";
    buttonClass += ` ${styles.highlightOff}`;
  }

  if (!highlightOn) 
    markClass = 'markOff';
  else 
    markClass = '';

  const toggleHighlight = () => {
    setHighlightOn(!highlightOn);
  };

  const verificationBoxContent = (
    <>
      <p>
        A client is requesting a software developer to produce a 
        calculator app which only performs multiplication or division 
        equations. When the client types the equation 
        <span className="math"> 2 x 3</span>, the calculator outputs a 
        <span className="math"> 5</span>. This <mark>shows an error</mark> in the 
        calculation process. Verifying that the software produces the 
        correct output will prevent bugs like this.
      </p>
    </>
  );

  const validationBoxContent = (
    <>
      <p>
      A client is requesting a software developer to produce a 
      calculator app which only performs multiplication or division 
      equations. However, the developer <mark>misheard the client</mark> and 
      developed a software which only performs additions and 
      subtractions. When the client tries all sorts of equations 
      involving additions and subtractions, <mark>the software produces 
      the correct output every time</mark>. However, the software developer 
      did not deliver a calculator that can solve multiplication and 
      division equations, hence the calculator <mark>did not meet the 
      client’s requirements</mark>. Validating that the software that is 
      being developed will meet user requirements will prevent 
      mistakes like this.
      </p>
    </>
  );

  const section2KeyWords = (
    <>
      <ul>
        <li>
          <strong>Software under test (SUT)</strong>: The software that is being tested
        </li>
        <li>
          <strong>Test oracle</strong>: A mechanism that provides information to the tester 
          on what is defined as a “pass” for a test case
        </li>
        <li>
          <strong>Oracle problem</strong>: A problem where a test oracle might not exist 
          for a certain software
        </li>
      </ul>
    </>
  )

  const oracleProblemExample = (
    <>
      <p>
        Imagine you are working as a software tester in a company. The company created a 
        compiler for Krokodyle, a new programming language the company has developed. 
        Your task is to test the compiler to ensure that the compiler translates the code 
        from Krokodyle language to machine language accurately. However, since you cannot 
        read machine language, you cannot simply compare the output of the compiler with 
        the source code. This means that a <mark>test oracle might be difficult to find or 
        might not even exist for this software</mark>. Hence this is called the oracle problem.
      </p>
    </>
  )

  const section2KeyWords2 = (
    <>
      <ul>
        <li>
          <strong>Metamorphic testing (MT)</strong>: A property-based testing mechanism that is affective 
          in alleviating the oracle problem by observing the relationships between properties 
          of the software
        </li>
        <li>
          <strong>Metamorphic relation (MR)</strong>: Relationships between properties of the software
        </li>
      </ul>
    </>
  )

  const MRExample = (
    <>
      <p>
        Imagine you are a software tester and you are a being tasked to test a <span className="math">
        sin()</span> function. However, you do not have the mathematical capabilities to verify every 
        possible input to the sine function. Instead, you chose to use MRs to generate test 
        cases.
      </p>
      <br />
      <p>
        To create a MR, you want to think of the properties of a sine function first. For 
        example, <span className="math">sin(𝑥) = sin(180 - 𝑥)</span>. Hence, this property can be used as a MR.
      </p>
      <p className="indent">
        <span className="math">MR<sub>equalOpposites</sub></span>: For any numerical 
        input <span className="math">𝑥</span>, <span className="math">sin(𝑥)</span> must be equal 
        to <span className="math">sin(180 - 𝑥)</span>. 
      </p>
      <br />
      <p>
        Hence, <mark>if any input <span className="math">x</span> violates this MR</mark>, we know that <mark>a bug exists</mark> in the program. 
        This is an example of using MRs for software verification.
      </p>
    </>
  )

  const litRevMTValidation = (
    <>
      <p>
        The k-Nearest Neighbour (kNN) and Naive Bayes algorithms are two of the most 
        famous machine learning frameworks. Xie et al. <a href="#ref15">[15]</a> performed a study where 
        they used MT to test a machine learning classifier software. They found 
        violations of MRs on the software’s implementation of these two
        algorithms. 
        <br /><br />
        After further investigation, they found out that <mark>some of the MRs that were 
        violated</mark> were <mark>not essential properties of the algorithms</mark>, instead these <mark>MRs 
        were developed based on user expectations</mark>. 
      </p>
    </>
  );

  const litReviewME = (
    <>
      <p>
        Zhang et al. <a href="#ref18">[18]</a> performed a study involving the development a Steer-by-Wire (SBW) system to control the steer of a dummy vehicle. They tested the system using MT and unit tests.
      </p>
      <br />

      <p>
        During the testing process, they <mark>found a fault through a MR violation</mark> in
        the system that was a case of ME. The MR that was violated is defined as follows:
      </p>
      <p className="indent">
        <span className="math">MR<sub>AngleConsistency</sub></span>: Rotate the steering wheel by a certain degree in one 
        direction in the source input, and by the same degree in the 
        opposite direction in the follow-up input. The absolute value 
        of the steering angle reported by the system should be the same 
        for both inputs.
      </p>
      <br />

      <p>
        The purpose of this MR was to verify whether the system can generate 
        consistent outputs when the steering wheel is rotated in opposite directions. 
        The MR was violated during the test. The inconsistency was <mark>initially 
        considered as a bug in the system</mark>. After further inspection, it was revealed 
        that the <mark>test case itself was flawed</mark>. Originally, the test code required an 
        exact match of the opposite steering angle values to pass the test. However, 
        the test <mark>did not take into consideration of deviations due to the physical 
        limitations</mark> of the steering wheel. In other words, it will be difficult to 
        precisely steer at the exact angle in opposite directions. 
      </p>
      <br />
      <p>
        To address this issue, the test code was modified such that angle deviations 
        of a certain threshold will be allowed. This allowed for small deviations 
        due to hardware limitations.
      </p>
      <br />
      <p>
        This issue of <mark>expecting to match values</mark> is a <mark>common mistake 
        made by software developers</mark> <a href="#ref19">[19]</a>. <mark>Developers like to presume 
        perfect conditions</mark> where <mark>hardware limitations</mark> are not taken 
        into account <a href="#ref20">[20]</a>.
      </p>
    </>
  );

  const section4KeyWords = (
    <>
      <ul>
        <li>
          <strong>Authentication</strong>: The process or action of verifying the identity 
          of a user or process when the user or process is requesting to 
          gain access into a resource or a system <a href="#ref26">[26]</a>
        </li>
        <li>
          <strong>Password</strong>: A string of characters that allows access to a computer system or service during authentication <a href="#ref26">[26]</a>
        </li>
        <li>
          <strong>Hashing</strong>: a one-way process that protects a password by turning it into a different and seemingly random string of characters <a href="#ref27">[27]</a>
        </li>
        <li><strong>Hash function</strong>: A mathematical algorithm used for hashing <a href="#ref27">[27]</a>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              It is also worth noting that there are many different hash formats with different hash algorithms for each hash format. Some hash formats are more difficult to crack than others
            </li>
          </ul>
        </li>
        <li>
          <strong>Hashed password</strong>: An output of the hash function when a password is passed into the hash function
        </li>
      </ul>
    </>
  );

  return (
    <div className={`${styles.body} ${markClass}`}>
      
      <div className={styles.headerButtons}>
        {/* back button */}
        <BackButton href={`/${courseId}`} label="← Back to Course Info" />

        {/* highlight toggle button */}
        <div style={{ textAlign: "right", marginBottom: "1rem" }}>
          <button 
            onClick={toggleHighlight} 
            className={`${styles.toggleHighlightButton} ${buttonClass}`}
            aria-label="Toggle highlight visibility"
          >
            {buttonLabel}
          </button>
        </div>
      </div>

      <nav id="toc" className={styles.toc}>
        <p className={styles.tocTitle}>📚 Table of Contents</p>
        <ul className={styles.tocList}>
          <li><a href="#section1">Section 1: Introduction to Software Testing</a>
            <ul>
              <li><a href="#section1-verification">Verification vs. Validation</a></li>
              <li><a href="#section1-types">Types of Software Testing</a></li>
            </ul>
          </li>
          <li><a href="#section2">Section 2: Metamorphic Testing</a>
            <ul>
              <li><a href="#section2-validation">Metamorphic Testing for Validation</a></li>
            </ul>
          </li>
          <li><a href="#section3">Section 3: Metamorphic Exploration (ME)</a></li>
          <li><a href="#section4">Section 4: Applying Metamorphic Testing on Password Crackers</a>
            <ul>
              <li><a href="#section4-background">Background</a>
                <ul>
                  <li><a href="#section4-passwords">Passwords and Password Crackers</a></li>
                  <li><a href="#section4-types">Types of Password Cracking</a></li>
                  <li><a href="#section4-commercial">Commercial Password Cracking Tools</a></li>
                </ul>
              </li>
              <li><a href="#section4-generating">Generating Metamorphic Relations</a></li>
              <li><a href="#section4-automating">Automating Tests</a></li>
            </ul>
          </li>
          <li><a href="#references">References (Informal)</a></li>
        </ul>
      </nav>

      <h1 id="section1" className={styles.h1}><a href="#toc" className="headingLinks">Section 1: Introduction to Software Testing</a></h1>
      <p className={styles.paragraphContent}>
        Generally, testing involves evaluating something to see if 
        it matches the expectations of the user or creators. Testing 
        is done in a wide range of industries to ensure that products 
        are of an expected quality. As the world evolves to commonly 
        adapt technology in everyday lives, it is crucial for tech 
        companies to perform testing into their products before 
        releasing for public consumption. This section will introduce 
        software testing, a key process in the quality assurance of a 
        software.
        <br /><br />
        <strong>Software testing</strong> is the process of assessing 
        a software to see if the software runs or performs as 
        expected. This helps developers to detect and fix bugs, along 
        with improving the performance of the software <a href="#ref1">[1]</a>.
      </p>
      

      <h2 id="section1-verification" className={styles.h2}><a href="#toc" className="headingLinks">Verification vs. Validation</a></h2>
      <p className={styles.paragraphContent}>
        <strong>Verification</strong> is a process of <mark>checking the software</mark> 
        to ensure that that it can <mark>reach its goals without encountering 
        any bugs</mark>. This process will ensure that the <mark>software performs 
        what it is supposed to do</mark> <a href="#ref2">[2]</a>.
      </p>

      <NoteBoxes 
        type="Example" 
        name="Verfication" 
        content= { verificationBoxContent }
      />
      <br />

      <p className={styles.paragraphContent}>
        <strong>Validation</strong> is a process of checking 
        whether the software <mark>meets the detailed specifications and user 
        requirements</mark>. It checks whether we are developing the right product. 
        This process prevents scenarios where the software might perform correctly, 
        but it is not the product that the user wants <a href="#ref2">[2]</a>. 
      </p>

      <NoteBoxes 
        type="Example"
        name="Validation"
        content = { validationBoxContent }
      />
      <br />

      <h2 id="section1-types" className={styles.h2}><a href="#toc" className="headingLinks">Types of Software Testing</a></h2>
      <p className={styles.paragraphContent}>
        Different types of software testing fall under two main categories, namely  
        <strong> functional testing</strong> and <strong>non-functional testing</strong> <a href="#ref3">[3]</a>. 
      </p>
      <ul>
        <li className={styles.paragraphContent}>
          <strong>Functional testing</strong> focuses on verifying that the software <mark>performs 
          exactly according to its intended functions</mark> and 
          should <mark>meet user expectations for various conditions </mark><a href="#ref4">[4]</a>.
        </li>
        <li className={styles.paragraphContent}>
          <strong>Non-functional testing</strong> focuses on assessing the software’s 
          performance, ensuring that the software <mark>can withstand the 
          expected demand</mark> and <mark>meet the requirements for other non-functional 
          metrics</mark>. Examples of such metrics are performance, security, 
          stability, scalability, etc. <a href="#ref5">[5]</a>.
        </li>
      </ul>
      <p className={styles.paragraphContent}>
        There are four main categories of testing under functional testing. 
        These categories include <strong>unit testing</strong>, <strong>integration testing</strong>, 
        <strong>system testing</strong> and <strong>acceptance testing</strong>.
        <br /><br />
        <strong>Metamorphic testing</strong>, however, can be used to <mark>test both function 
        and non-functional properties</mark> of the software. More on this will 
        be discussed in the following sections.
      </p>
      <br />

      <Quiz
        type="mcq"
        questionNumber="1a"
        question="What is software testing?"
        options={[
            "Software testing involves the process of verification and validation.",
            "Software testing involves the process of verification.",
            "Software testing involves the process of validation.",
            "Software testing does not involve the processes of verification nor validation."]}
        correctAnswer="1" 
        feedback={{
          "2": "Although software testing can be used to verify a software, it can also be used to validate whether the software is meets user needs and needs and expectations.",
          "3": "Although software testing can be used to validate whether the software meets user requirements, it can also be used to verify the correctness of the software's outputs.",
          "4": "The purpose of software testing is to be able to verify whether the software can produce the correct output (verification) and validate whether the software are meeting the user requirements (validation)."
        }}
      />

      <Quiz
        type="short"
        questionNumber="1b"
        question="What procedure does the following sentence describe: Checking the software to ensure that that it can reach its goals without encountering any bugs. This process will ensure that the software performs what it is supposed to do."
        correctAnswer={[
          "Verification",
          "Software Verification",
          "Verification Testing"
        ]}
        explanation="Verification is a process that ensures the software performs what it is supposed to do and produces correct output."
      />

      <br />
      <h2 id="section2" className={styles.h2}><a href="#toc" className="headingLinks">Section 2: Metamorphic Testing</a></h2>
      <p className={styles.paragraphContent}>
      Traditionally, software testing requires a procedure where testers 
      can <mark>verify the results</mark> of a <strong>software under test (SUT)</strong>, known as a 
      <strong>test oracle</strong> <a href="#ref6">[6]</a>. Common test oracles are comparing the outputs of 
      the SUT with the expected output, however, in some scenarios, the 
      software testers <mark>cannot define what can be considered as passing 
      the test</mark> for a software (eg. testing compilers). This falls under 
      an essential problem in software testing–the oracle problem <a href="#ref6">[6]</a><a href="#ref7">[7]</a>. 
      </p>

      <NoteBoxes 
        type="Key Words"
        name="Name"
        content = { section2KeyWords }
      />
      <NoteBoxes 
        type="Example"
        name="an Oracle Problem"
        content = { oracleProblemExample }
      />
      <br />

      <p className={styles.paragraphContent}>
        <strong>Metamorphic testing (MT)</strong> is known to <mark>alleviate the oracle problem</mark> <a href="#ref8">[8]</a>
        and assist software testers in <mark>generating test cases</mark> and <mark>verifying results</mark> 
        <a href="#ref9">[9]</a>, which are also key challenges in software testing <a href="#ref10">[10]</a>. Furthermore, 
        MT can verify whether the SUT <mark>behaves consistently with multiple input 
        variations</mark> and <mark>identify hidden errors</mark> <a href="#ref9">[9]</a><a href="#ref12">[12]</a>. MT does this by observing 
        the <mark>relationships between various inputs and the corresponding outputs of 
        several runs of the SUT</mark> [12]. These relationships are known as Metamorphic 
        Relations (MRs). MT <mark>applies MRs to generate new (follow-up) tests from 
        existing (source) test cases</mark>, ensuring that the relations consistently hold 
        between the inputs and outputs of the source and follow-up tests <a href="#ref13">[13]</a>. Hence, 
        <mark>if an MR is violated</mark>, the <mark>MT case has failed</mark>, indicating the <mark>presence 
        of bugs</mark> in the SUT <a href="#ref12">[12]</a>.
      </p>

      <NoteBoxes 
        type="Key Words"
        name="Metamorphic Testing"
        content = { section2KeyWords2 }
      />
      <NoteBoxes 
        type="Example"
        name="a MR"
        content = { MRExample }
      />
      <br />

      <h2 id="section2-validation" className={styles.h2}><a href="#toc" className="headingLinks">Metamorphic Testing for Validation</a></h2>
      <p className={styles.paragraphContent}>
        MT was first introduced as a method of software verification, however, it has 
        been then <mark>used as a method for software validation</mark>. In other words, MT can be 
        used to <mark>assist developers in building the right product</mark> <a href="#ref14">[14]</a>. To perform 
        validation, <mark>MRs can be developed using the properties that users expect</mark> the 
        program to have. A violation of the MRs indicates that the program 
        is yet to have such properties.
      </p>

      <NoteBoxes 
        type="Literature Review"
        name="using MT for Validation"
        content={ litRevMTValidation }
      />
      <br />

      <p className={styles.paragraphContent}>
        While MRs can be used to assist developers in <mark>improve the user experience of 
        the system</mark>, MRs can also be used for <mark>users to further understand a system</mark>, 
        just as seen in the above literature review. The violation of the MRs from 
        the study performed by Xie et al. <a href="#ref15">[15]</a> showed that <mark>their understanding of the 
        algorithms might not be true properties of the algorithms</mark>. Hence, MRs can 
        be <mark>used for users to further understand the system and its properties</mark>. Zhou et 
        al. <a href="#ref16">[16]</a> introduced a formal framework for using MRs to enhance user 
        understanding of the system called Metamorphic Exploration (ME) which will 
        be discussed in the next section.
      </p>

      <Quiz
        type="mcq"
        questionNumber="2a"
        question="What is a test oracle?"
        options={[
            "A mechanism that provides information to the tester regarding the ambiguity of the outputs of the software.",
            "A mechanism that provides information to the user on where the bugs are in the software.",
            "A mechanism that provides information to the tester on what is defined as a “pass” for a test case.",
            "A mechanism that provides information to the tester on which parts of the software to test."]}
        correctAnswer="3" 
        feedback={{
          "1": "A test oracle does not provide any information regarding how ambiguity of software's outputs. Instead, it defines all the acceptable outputs for a given test case.",
          "2": "A test oracle does not pinpoint where bugs exist in the software. Instead, it defines all the acceptable outputs for a given test case, enabling testers to identify errors that may indicate bugs.",
          "4": "A test oracle does not tell the tester which parts of the software to test. Instead, it determines whether the output of a given test case is correct based on predefined expected results."
        }}
      />
      <Quiz
        type="mcq"
        questionNumber="2b"
        question="Which of the following example accurately demonstrates an oracle problem existing in the software?"
        options={[
            "The tester is testing a mathematical program. The tester does not know how the program works or how it is supposed to work. Hence, he is unable to verify the expected output for the test cases he created.",
            "The tester is testing a mathematical program. The tester does not have the capability to compute the right answer, hence he is unable to verify the expected output for the test cases he created.",
            "All of the above.",
            "None of the above."]}
        correctAnswer="2" 
        feedback={{
          "1": "Without understanding how the program works, it becomes difficult for the tester to verify or validate the system. However, because of the complexity the program, the tester cannot perform effective testing due to the program's complexity.",
          "3": "The first option is wrong. Without understanding how the program works, it becomes difficult for the tester to verify or validate the system. However, because of the complexity the program, the tester cannot perform effective testing due to the program's complexity.",
          "4": "The second option is correct. Due to the program's complexity, the tester cannot compute all of the possible correct answers for a test case. Take the sine function as an example."
        }}
      />

      <Quiz
        type="mcq"
        questionNumber="2c"
        question="Which of the following statements is NOT TRUE regarding metamorphic testing and metamorphic relations?"
        options={[
            "A metamorphic relation transforms existing test cases into new ones.",
            "The ONLY purpose of metamorphic testing is to validate the software.",
            "In metamorphic testing, known properties of the software can be used to create test cases .",
            "None of the above."
        ]}
        correctAnswer="2" 
        feedback={{
          "1": "Metamorphic testing applies metamorphic relations to create a new test case based on the old test case, ensuring the the two test cases have a relationship. If the relationship between the outputs of the two test cases are violated, a potential flaw is found.",
          "3": "Usually, metamorphic relations are created based on known properties of the software. Example: for a multiplication function, mul(a, b), where the output of the function is the product of a and b. The output of mul(2, 3) should equal to the output of mul(3, 2).",
          "4": "This option is wrong because not all of the above options are correct. The second option is wrong because metamorphic relations are usually created based on known properties of the software. Example: for a multiplication function, mul(a, b), where the output of the function is the product of a and b. The output of mul(2, 3) should equal to the output of mul(3, 2).",
        }}
      />

      <Quiz
        type="short"
        questionNumber="2d"
        question="What does the following scenario describe: A software developer created a function that implements the shortest-path algorithm. However, he does not know how to verify the output of his function if a user wants to find the shortest path between multiple nodes/destinations."
        correctAnswer={[
          "The Oracle Problem",
          "Oracle Problem"
        ]}
        explanation="The oracle problem challenges developers and testers when a test oracle is incomplete, non-existent, or too costly to apply. The above scenario describes a case where the oracle is too costly to use. In this case, the tester would need to calculate all possible combinations of nodes/destinations to determine the shortest path, which is very inefficient and requires significant computing power (computationally expensive)."
      />

      <Quiz
        type="short"
        questionNumber="2e"
        question="What concept in software testing does the following scenario describe: A software developer creates a multiplication function, multiply(a, b), where the output of the function is the output of a x b. However, a and b can only be 1 digit numbers. He found a method to verify his function which is to calculate all 90 possible equations."
        correctAnswer={[
          "Test Oracle",
          "Oracle"
        ]}
        explanation="The program is simple enough that the developer can manually determine the correct output for every possible input combination. In this case, the developer effectively defines a test oracle, which is a mechanism that allows them to verify whether the program's output is correct for each test case."
      />

      <Quiz
        type="short"
        questionNumber="2f"
        question="Fill in the blanks in the correct order. Separate the answers using commas (eg: alpha,beta): Metamorphic relations transform existing (_____) test cases into new (_____) test cases."
        correctAnswer={[
          "Source,Follow-Up",
          "Source,Follow Up",
          "Source ,Follow-Up",
          "Source, Follow-Up",
          "Source , Follow-Up",
          "Source ,Follow Up",
          "Source, Follow Up",
          "Source , Follow Up"
        ]}
        explanation='"Source test case" and "follow-up test case" are important terminologies in metamorphic testing. At least two test cases are required to establish a metamorphic relation. A metamorphic relation can consist of a source test case and multiple follow-up test cases and vice versa.'
      />
      <br />
      <h1 id="section3" className={styles.h1}><a href="#toc" className="headingLinks">Section 3: Metamorphic Exploration</a></h1>
      <p className={styles.paragraphContent}>
        Initially, MT was introduced as a 
        framework for software verification, where <mark>MRs were generated based on
        the properties or specifications</mark> of the system <a href="#ref16">[16]</a>. However, Zhou et 
        al. <a href="#ref17">[17]</a> broadened MT into a framework for not only <mark>verification</mark>, but 
        as well as <mark>validation</mark>, where <mark>MRs can be generated based on user 
        expectations</mark>. If an MR is violated, then the program is regarded as 
        flawed or at least to have not met user expectations [16].
      </p>
      <br />
      <p className={styles.paragraphContent}>
        <strong>Metamorphic Exploration (ME)</strong> is based on the idea that a <mark>violation of a MR 
        does not imply the program to be erroneous</mark> or to <mark>not have met user expectations</mark>, 
        but a <mark>MR violation may indicate a user misunderstanding</mark> of the system, allowing 
        users to better comprehend the system [16]. This MR is called a <strong>Hypothesised 
        Metamorphic Relation (HMR)</strong>, which allows better understanding of SUT by <mark>generating 
        MRs that users hypothesise</mark> to be accepted by the system, but are <mark>not necessary 
        properties of the system</mark> [16].  Hence, users may take necessary actions to satisfy
        their own needs. The concept of ME is similar to MT except that the purpose of ME 
        is to <mark>enhance user understanding of the system</mark> so that the system can be used 
        for its appropriate purpose.
      </p>
      
      <NoteBoxes 
        type="Literature Review"
        name="Metamorphic Exploration"
        content = { litReviewME }
      />
      <br />

      <Quiz
        type="mcq"
        questionNumber="3a"
        question="Which of the following statements are NOT TRUE regarding metamorphic exploration."
        options={[
            "Metamorphic exploration may apply MRs that are not based on known properties of the system.",
            "Metamorphic exploration allows users to discover the functionalities of the system.",
            "Metamorphic exploration can be used for a user to enhance software comprehension.",
            "None of the above."]}
        correctAnswer="4" 
        feedback={{
          "1": "This statement is TRUE because the purpose of metamorphic exploartion is to explore the system functionalities so that users can understand the system better. Hence, the metamorphic relations used are based on hypothesised or expected properties of the system (Hypothesised Metamorphic Relations).",
          "2": "This statement is TRUE because the purpose of metamorphic exploration is to explore the system functionalities so that users can understand the system better. Hence, users may better understand the functionalities of the system and how the system works.",
          "3": "This statement is TRUE because the purpose of metamorphic exploration is to explore the system functionalities so that users can understand the system better."
        }}
      />

      <Quiz
        type="short"
        questionNumber="3b"
        question="What procedure does the following describe (do not use acronyms): A tester creates metamorphic relations based on his own assumptions to verify a software."
        correctAnswer={[
          "Metamorphic Exploration",
          "Metamorphic Exploration (ME)"
        ]}
        explanation="Metamorphic exploration involves the usage of hypothesised metamorphic relations. These relations are based on properties that the user assumes or expects the system to have."
      />

      <h1 id="section4" className={styles.h1}>
        <a href="#toc" className="headingLinks">Section 4: Applying Metamorphic Testing on Password Crackers (A Real-World Example)</a>
      </h1>
      <h2 id="section4-background" className={styles.h2}><a href="#toc" className="headingLinks">Background</a></h2>
      <h3 id="section4-passwords" className={styles.h3}><a href="#toc" className="headingLinks">Passwords and Password Crackers</a></h3>

      <p className={styles.paragraphContent}>
        In 2020, cyber-attacks have cost the world economy almost $1 trillion, 
        increasing over 50% in just four years <a href="#ref21">[21]</a>. Cyber crimes have greatly 
        affected businesses, leading to privacy violations, business disruption and 
        financial losses <a href="#ref22">[22]</a>. Part of this was caused by the <mark>lack of secure 
        methods</mark> in <mark>storing and retrieving user passwords</mark> <a href="#ref23">[23]</a>.
      </p>
      <br />

      <p className={styles.paragraphContent}>
        A <strong>password</strong> is usually passed into a cryptographic hash function, 
        which <mark>returns a transformed text</mark> called <strong>hashed password</strong>. Hashed 
        passwords is a <mark>string consisting of random numbers and alphabet letters</mark>, and <mark>cannot be deciphered</mark>, 
        making them <mark>impossible to crack</mark>. They are <mark>stored in the database with the corresponding user 
        account information</mark>, without including the original password for 
        increased protection. During user authentication, when a user enters 
        their password, the <mark>entered password is then hashed and compared</mark> with 
        the stored hashed password in the database <mark>to verify</mark> the user. 
        These hash functions are also <mark>irreversible</mark>, making it almost impossible 
        to retrieve the original password <a href="#ref23">[23]</a>. 
      </p>
      <br />

      <p className={styles.paragraphContent}>
        However, as computing power continues to grow, automated password-guessing 
        is becoming easier. Hence, a way for companies to ensure the security of 
        their authentication system is to hire <strong>penetration testers (pentesters)</strong>, also known as <strong>ethical hackers</strong>,
        to <mark>attempt to access the user accounts externally</mark>, which involves a method 
        called <strong>password cracking</strong> <a href="#ref25">[25]</a>. To perform this, they use password crackers, 
        which turns these hashed passwords into their equivalent password 
        through <mark>guessing</mark> [25]. However, despite password crackers being a powerful tool, 
        it remains <mark>very difficult to verify the correctness of the output of the crackers</mark>. 
        The <mark>irreversible nature of hash functions</mark> caused the <mark>oracle problem</mark> to occur 
        in password crackers, hence making MT a suitable framework for testing password 
        crackers.  Hence, this section will cover how MT can be applied on testing 
        password crackers.
      </p>

      <NoteBoxes 
        type="Key Words"
        content={ section4KeyWords }
      />
      <br />

      <h3 id="section4-types" className={styles.h3}><a href="#toc" className="headingLinks">Types of Password Cracking Attacks</a></h3>
      <p className={styles.paragraphContent}>
        Some of the most popular password cracking attack types are:
      </p>
      <ul>
        <li>
          <strong>Brute-force attack</strong>: A <mark>trial-and-error method</mark> that uses <mark>every possible character combination</mark> to guess 
          and attempt to crack a hashed password <a href="#ref28">[28]</a>
        </li>
        <li>
          <strong>Dictionary attack</strong>: A cracking method that involves the 
          usage of <strong>wordlists</strong> (list of possible passwords), which is also known as 
          a <strong>dictionary</strong>, <mark> to try each password in the dictionary</mark> and 
          see if it is the user’s password <a href="#ref29">[29]</a>
        </li>
        <li>
          <strong>Rainbow table attack</strong>: An attack that <mark>compares</mark> the 
          hashed password <mark>with each entry in a rainbow table</mark>. A <strong>rainbow table</strong> is
          a large table consisting of <mark>pre-computed hash values</mark> and <mark>their corresponding passwords</mark> <a href="#ref30">[30]</a>
        </li>
      </ul>
      
      <h3 id="section4-commercial" className={styles.h3}><a href="#toc" className="headingLinks">Commercial Password Cracking Tools</a></h3>

      <p className={styles.paragraphContent}>
        The following tools were released as open source and are often used by the 
        cyber security industry, including pentesters, forensic scientists and 
        companies. These tools will be the SUT for this section.
      </p>
      <ul>
        <li>
          <strong>John the Ripper (JtR)</strong> <a href="#ref31">[31]</a> is a <mark>free software</mark> <a href="#ref32">[32]</a>, dominating on the open 
          source password cracker market <a href="#ref33">[33]</a>. Its key features include <mark>four distinct 
          cracking methods</mark> in a single package, <mark>automatic hash type detection</mark> during 
          the cracking process, ability to <mark>crack different hash types in a file</mark>, and a <mark>customisable cracker option</mark>. It supports cracking 
          in <mark>multiple hash formats</mark>. It also has a commercial counterpart, <strong>John the 
          Ripper Pro</strong>, which is mainly distributed in “native” package formats for the 
          target operating system (OS) <a href="#ref30">[30]</a>. Its benefits include a simple installation 
          process and enhanced performance. JtR also has its community-enhanced version, 
          called <strong>John the Ripper Jumbo</strong>, which supports hundreds of hash types <a href="#ref30">[30]</a>.
        </li>
        <li>
          <strong>Hashcat</strong> <a href="#ref34">[34]</a> is another password cracking and recovery tool, 
          which refers to itself as the “world’s fastest CPU-based password recovery 
          tool.” It was released in 2009 as proprietary software, but was (re-)released 
          as <mark>open source software</mark> in 2015. Its enhanced equivalent, <strong>oclHashcat</strong>, utilises 
          the Graphics Processing Unit (GPU), allowing significantly faster cracking 
          compared to Hashcat’s <mark>multi-threaded, CPU-based framework</mark>. Unlike JtR, Hashcat 
          also <mark>supports the MD4, MD5, and SHA-family hash types</mark>, on top of the other formats 
          supported by JtR. It also supports <mark>eight different cracking types</mark>, making it more 
          flexible than JtR.
        </li>
      </ul>
      
      <h2 id="section4-generating" className={styles.h2}><a href="#toc" className="headingLinks">Generating Metamorphic Relations</a></h2>
      <p className={styles.paragraphContent}>
        It is worth noting that in this example, the <mark>dictionary attack</mark> and <mark>brute force attack</mark>
        attack features are going to be <mark>tested on JtR and Hashcat</mark>. Some of the MRs developed 
        can apply to test both dictionary attacks and brute force attacks, and other 
        MRs are attack type specific. For ease of reference, the MRs will be identified 
        as <span className="math">MR B.X</span> or <span className="math">MR D.X</span>, where <span className="math"><mark>X</mark></span> corresponds to the <mark>MR 
        identifier number</mark>, <span className="math"><mark>B</mark></span> corresponds to a <mark>MR for brute force attacks</mark>, 
        and <span className="math"><mark>D</mark></span> corresponds to a <mark>MR for dictionary attacks</mark>.
      </p>
      <br />
      <p className={styles.paragraphContent}>
        JtR and Hashcat, two of the most commercially used password cracking software 
        in the cyber security industry. <mark>Both software support a variety of <strong>Operating System (OS)</strong> types</mark>, 
        hence they are <mark>expected to perform consistently on various OSs</mark>. Two MRs based 
        on this property can be created–one for dictionary attacks and one for brute force attacks.
      </p>
      <p className="indent slightVerticalSpace styles.paragraphContent">
        <span className="math">MR D.1: Consistency of Dictionary Attack Results Between Operating Systems (OSs)</span>
      </p>
      <p className="doubleIndent styles.paragraphContent">
        To conduct the test, generate a hash file, called <span className="math">file<sub>hash</sub></span>, and a dictionary file, <span className="math">file<sub>dictionary</sub></span>, while 
        ensuring that <span className="math">file<sub>dictionary</sub></span> contains all the corresponding passwords in <span className="math">file<sub>hash</sub></span>.
      </p>
      <br />
      <p className="doubleIndent styles.paragraphContent">
        <span className="math">MR D.1</span>: 
      </p>
      <ul className="tripleIndent">
        <li>
          <strong>Source test case</strong>: In an OS environment (eg. MacOS), perform a dictionary attack on <span className="math">file<sub>hash</sub></span> using <span className="math">file<sub>dictionary</sub></span> as
          the dictionary.
        </li>
        <li>
          <strong>Follow-up test case</strong>, perform the same dictionary 
          attack on a different OS environment (eg. Kali Linux).
        </li>
      </ul>
      <p className="doubleIndent styles.paragraphContent slightVerticalSpace">
        In this MR, the <mark>OS environment is 
        treated as an input</mark>. <br />The relationship between the two test cases are: <i>The hashes that were cracked 
        on the MacOS system should also be cracked on the Kali Linux system </i>.
      </p>
      <br />

      <p className="indent styles.paragraphContent">
        <span className="math">MR B.1: Consistency of Brute Force Attack Results Between Operating Systems (OSs)</span>
      </p>
      <p className="doubleIndent styles.paragraphContent">
        To conduct the test, generate a random hash file, called <span className="math">file<sub>hash</sub></span>.
      </p>
      <br />
      <p className="doubleIndent styles.paragraphContent">
        <span className="math">MR B.1</span>: 
      </p>
      <ul className="tripleIndent">
          <li>
            <strong>Source test case</strong>: In an OS environment (eg. MacOS), perform a brute force attack on <span className="math">file<sub>hash</sub></span>.
          </li>
          <li>
            <strong>Follow-up test case</strong>, perform the same brute force 
            attack on a different OS environment (eg. Kali Linux).
          </li>
        </ul>
      <p className="doubleIndent styles.paragraphContent slightVerticalSpace">
        In this MR, the <mark>OS environment is 
        treated as an input</mark>. <br />The relationship between the two test cases are: <i>The hashes that were cracked 
        on the MacOS system should also be cracked on the Kali Linux system </i>.
      </p>
      <br />
      
      <p className={styles.paragraphContent}>
        <strong>Salts</strong> are <mark>strings consisting random letters or 
        numbers appended to hashed passwords</mark>. It helps <mark>defend against password 
        cracking attacks</mark>, such as rainbow table attacks. Hence, this makes the 
        stored hashed passwords more difficult to crack. Good password crackers 
        are <mark>expected to be able to bypass this “safety measure”</mark> by separating the 
        salt from the hashed password itself. Hence, the password crackers are 
        expected to be able to <mark>crack salted hashed passwords</mark>. Two MRs based on this 
        property can be generated–one for dictionary attacks and one for brute force attacks. These MRs are designed to <mark>test the consistency 
        of the cracker’s salt-parsing ability</mark>, especially when the <mark>salts are 
        long and complex</mark>, simulating real-life situations where many 
        modern authentication systems combine complex salts to the passwords 
        for improved security.
      </p>
      <p className="indent slightVerticalSpace styles.paragraphContent">
        <span className="math">MR D.2: Consistency of the Cracker’s Salt-Parsing Ability</span>
      </p>
      <p className="doubleIndent styles.paragraphContent">
        To perform this test, generate two hash files, <span className="math">file<sub>shortSaltHash</sub></span> and <span className="math">file<sub>longSaltHash</sub></span>. Both files should contain
        identical hashes, except that the salts in <span className="math">file<sub>longSaltHash</sub></span> should 
        be more complex and longer in length. Generate a random dictionary file, <span className="math">file<sub>dictionary</sub></span>, which should contain all the corresponding passwords from the two hash files.
      </p>
      <br />
      <p className="doubleIndent styles.paragraphContent">
        <span className="math">MR D.2</span>: 
      </p>
      <ul className="tripleIndent">
        <li>
          <strong>Source test case</strong>: Perform a dictionary attack on <span className="math">file<sub>shortSaltHash</sub></span> using <span className="math">file<sub>dictionary</sub></span> as the dictionary.
        </li>
        <li>
          <strong>Follow-up test case</strong>: Perform a dictionary attack on <span className="math">file<sub>longSaltHash</sub></span> using <span className="math">file<sub>dictionary</sub></span> as the dictionary.
        </li>
      </ul>
      <p className="doubleIndent styles.paragraphContent slightVerticalSpace">
        In this MR, the <mark>salts are treated as the input</mark>. 
        <br />
        Hence, the relationship between the two test cases are: the <i>hashes in <span className="math">file<sub>shortSaltHash</sub></span> that were cracked 
        should be identical with the hashes cracked in <span className="math">file<sub>longSaltHash</sub></span></i>.
      </p>
      <br />

      <p className="indent slightVerticalSpace styles.paragraphContent">
        <span className="math">MR B.2: Consistency of the Cracker’s Salt-Parsing Ability</span>
      </p>
      <p className="doubleIndent styles.paragraphContent">
        To perform this test, generate two hash files, <span className="math">file<sub>shortSaltHash</sub></span> and <span className="math">file<sub>longSaltHash</sub></span>. Both files should contain
        identical hashes, except that the salts in <span className="math">file<sub>longSaltHash</sub></span> should 
        be more complex and longer in length. 
      </p>
      <br />
      <p className="doubleIndent styles.paragraphContent">
        <span className="math">MR B.2</span>: 
      </p>
      <ul className="tripleIndent">
        <li>
          <strong>Source test case</strong>: Perform a brute force attack on <span className="math">file<sub>shortSaltHash</sub></span>.
        </li>
        <li>
          <strong>Follow-up test case</strong>: Perform a dictionary attack on <span className="math">file<sub>longSaltHash</sub></span>.
        </li>
      </ul>
      <p className="doubleIndent styles.paragraphContent slightVerticalSpace">
        In this MR, the <mark>salts are treated as the input</mark>. 
        <br />
        Hence, the relationship between the two test cases are: the <i>hashes in <span className="math">file<sub>shortSaltHash</sub></span> that were cracked 
        should be identical with the hashes cracked in <span className="math">file<sub>longSaltHash</sub></span></i>.
      </p>
      <br />
      
      <p className={styles.paragraphContent}>
        JtR supports <mark>cracking hash files that contain multiple hash 
        types within a single file</mark>, without requiring users to specify 
        the hash types. Therefore, the following MR will evaluate the 
        crackers’ ability to <mark>consistently and accurately detect and crack
        different types in a single file</mark>. As for Hashcat, it is <mark>not specified if Hashcat 
        supports this feature</mark>, so this MR will be used to <mark>explore Hashcat</mark>, an <mark>instance of ME</mark>.
      </p>
      <p className="indent slightVerticalSpace styles.paragraphContent">
        <span className="math">MR D3: Hash Type Detection Test</span>
      </p>
      <p className="doubleIndent styles.paragraphContent">
        To conduct the test, prepare a set of hash files, 
        each hash file should only contain hashes of a single type, 
        and the hash type used in each file should be different.
        The same list of passwords should be used for each file. 
        We can refer to this set of files as <span className="math">files<sub>differentHashes</sub></span>.
        Prepare another hash file, <span className="math">file<sub>combinedHashes</sub></span>, which should
        contain a combination of the hashed passwords in all the previous hash files.
        Lastly, prepare a single dictionary file, <span className="math">file<sub>dictionary</sub></span>,
        which should contain all the corresponding passwords that were in all of the hash files.
      </p>
      <br />
      <p className="doubleIndent styles.paragraphContent">
        <span className="math">MR D.3</span>: 
      </p>
      <ul className="tripleIndent">
        <li>
          <strong>Source test case</strong>: Perform a dictionary attack on each hash file in the set of <span className="math">files<sub>differentHashes</sub></span> using <span className="math">file<sub>dictionary</sub></span> as the dictionary.
        </li>
        <li>
          <strong>Follow-up test case</strong>: Perform a dictionary attack on <span className="math">file<sub>combinedHashes</sub></span> using <span className="math">file<sub>dictionary</sub></span> as the dictionary.
        </li>
      </ul>
      <p className="doubleIndent styles.paragraphContent slightVerticalSpace">
        In this MR, the <mark>number of different types of hashes used in a single hash file are treated as the input</mark>. 
        <br />
        Hence, the relationship between the two test cases are: <i>The hashes that were cracked in the 
        source test case should be identical to the hashes cracked in the follow-up test case</i>.
      </p>
      <br />

      <p className={styles.paragraphContent}>
        The following <mark>MR was created after a violation was found</mark> 
        while running test cases that applied <span className="math">MR D.3</span> in JtR, 
        <mark>serving as an HMR</mark> to <mark>identify the cause of the violation</mark>, a case of <mark>ME</mark>. Both JtR and Hashcat have a 
        feature which allows the user to specify the hash format in 
        the command. For example, in JtR, the --format=md5crypt 
        parameter can be used in the command to specify that MD5crypt 
        was the algorithm used to hash the passwords.
      </p>
      <p className="indent slightVerticalSpace styles.paragraphContent">
        <span className="math">MR D4: Specification of Hash Type in the Attack Command</span>
      </p>
      <p className="doubleIndent styles.paragraphContent">
        To perform the test, prepare a hash file,<span className="math">file<sub>hash</sub></span>, and a 
        dictionary file <span className="math">file<sub>dictionary</sub></span>, while ensuring that all the 
        corresponding passwords in <span className="math">file<sub>hash</sub></span> are in <span className="math">file<sub>dictionary</sub></span>.
      </p>
      <br />
      <p className="doubleIndent styles.paragraphContent">
        <span className="math">MR D.4</span>: 
      </p>
      <ul className="tripleIndent">
        <li>
          <strong>Source test case</strong>: Perform a dictionary attack on <span className="math">file<sub>hash</sub></span> using <span className="math">file<sub>dictionary</sub></span> as the dictionary without specifying the hash type in the command.
        </li>
        <li>
          <strong>Follow-up test case</strong>: Perform a dictionary attack on <span className="math">file<sub>hash</sub></span> using <span className="math">file<sub>dictionary</sub></span> as the dictionary and specify the hash type in the command.
        </li>
      </ul>
      <p className="doubleIndent styles.paragraphContent slightVerticalSpace">
        In this MR, the <mark>whether the hash type is specified in the attack command is treated as the input</mark>. 
        <br />
        Hence, the relationship between the two test cases are: <i>The hashes that were cracked in the 
        source test case should be identical to the hashes cracked in the follow-up test case</i>.
      </p>
      <br />

      <h2 id="section4-automating" className={styles.h2}><a href="#toc" className="headingLinks">Automating Tests</a></h2>
      <p className={styles.paragraphContent}>
        One important factor to remember is that <mark>MR violations sometimes are not easily 
        identifiable</mark>. Hence, performing MT might require the tester to <mark>run numerous 
        test cases</mark> until a MR violation is identified. Performing MT manually may 
        require the tester a significant amount of time and effort, thus it may be a 
        better idea to <mark>run the tests automatically</mark>. Doing so requires knowledge on 
        a <mark>scripting language</mark> that is supported by your OS. For example on Unix-based OS, 
        such as MacOS and Linux OS, <strong>Bash</strong> will be a great option. For Windows OS, a 
        recommended scripting language is <strong>PowerShell</strong>. 
        <br /><br />
        These scripting languages can be used to produce scripts 
        that <mark>generate the hashed passwords</mark>, <mark>create a dictionary file</mark>, <mark>hash the passwords</mark>, <mark>crack 
        the hash files</mark> and <mark>output the results in a text file</mark>. 
        However, a drawback to using scripts is that the tester needs to have 
        prior knowledge on the script commands. 
      </p>

      <h1 id="references" className={styles.h1}><a href="#toc" className="headingLinks">References</a></h1>
      <p id="ref1" className="references">
        [1] IBM. <i>What is Software Testing?</i>. <a href="https://www.ibm.com/think/topics/software-testing">https://www.ibm.com/think/topics/software-testing</a> (accessed April 8, 2025).
      </p>
      <p id="ref2" className="references">
        [2] GeeksForGeeks. <i>Verification and Validation in Software Engineering</i>. <a href="https://www.geeksforgeeks.org/software-engineering-verification-and-validation/#verification">https://www.geeksforgeeks.org/software-engineering-verification-and-validation/#verification</a> (accessed April 8, 2025).
      </p>
      <p id="ref3" className="references">
        [3] BrowserStack. <i>Software Testing Techniques: Explained with Examples</i>. <a href="https://www.browserstack.com/guide/software-testing-techniques">https://www.browserstack.com/guide/software-testing-techniques</a> (accessed April 8, 2025).
      </p>
      <p id="ref4" className="references">
        [4] BrowserStack. <i>Functional Testing: A Detailed Guide</i>. <a href="https://www.browserstack.com/guide/functional-testing">https://www.browserstack.com/guide/functional-testing</a> (accessed April 8, 2025).
      </p>
      <p id="ref5" className="references">
        [5] BrowserStack. <i>Non-Functional Testing: A Detailed Guide</i>. <a href="https://www.browserstack.com/guide/what-is-non-functional-testing">https://www.browserstack.com/guide/what-is-non-functional-testing</a> (accessed April 8, 2025).
      </p>
      <p id="ref6" className="references">
        [6] E. J. Weyuker, (1982). On Testing Non-Testable Programs. <i>Computer Journal, 25</i>(4), 465-470. <a href="http://dx.doi.org/10.1093/comjnl/25.4.465">http://dx.doi.org/10.1093/comjnl/25.4.465</a>.
      </p>
      <p id="ref7" className="references">
        [7] Anand, S., Burke, E. K., Chen, T. Y., Clark, J., Cohen, M. B., Grieskamp, W., Harman, M. J., & McMinn, P. (2013). An Orchestrated Survey of Methodologies for Automated Software Test Case Generation. Journal of System Software, 86(8), 1978-2001. <a href="http://dx.doi.org/10.1016/j.jss.2013.02.061">http://dx.doi.org/10.1016/j.jss.2013.02.061</a>.
      </p>
      <p id="ref8" className="references">
        [8] Chen, T. Y., Cheung, S. C., & Yiu, S. M. (1998). Metamorphic Testing: A New Approach for Generating Next Test Cases. Technical Report HKUST-CS98-01. Department of Computer Science, Hong Kong University of Science and Technology, Hong Kong. <a href="https://doi.org/10.48550/arXiv.2002.12543">https://doi.org/10.48550/arXiv.2002.12543</a>.
      </p>
      <p id="ref9" className="references">
        [9] Chen, T. Y., Kuo, F. C., Poon, P. L., Towey, D., Tse, T. H., & Zhou, Z. Q. (2018). Metamorphic testing: A review of Challenges and Opportunities. ACM Computing Surveys. <a href="https://doi.org/10.1145/3143561">https://doi.org/10.1145/3143561</a>.
      </p>
      <p id="ref10" className="references">
        [10] Whittaker, J. A. (2000). What is software testing? And why is it so hard? IEEE Software, 17(1), 70-79. <a href="https://doi.org/10.1109/52.819971">https://doi.org/10.1109/52.819971</a>.
      </p>
      <p id="ref11" className="references">
        [11] Segura, S., Fraser, G., Sanches, A. B., & Ruiz-Cortés, A. (2016). A Survey on Metamorphic Testing. IEEE Transactions on Software Engineering, 42(9), 805-824. <a href="https://doi.org/10.1109/TSE.2016.2532875">https://doi.org/10.1109/TSE.2016.2532875</a>.
      </p>
      <p id="ref12" className="references">
        [12] Chen, T. Y., Kuo, F., Susilo, W., Towey, D., Voas, J., & Zhou, Z. Q. (2016). Metamorphic testing for cybersecurity. Computer, 49(6), 48-55. <a href="https://doi.org/10.1109/MC.2016.176">https://doi.org/10.1109/MC.2016.176</a>.
      </p>
      <p className="ref13" id="references">
        [13] Zhang, Y., Towey, D., Pike, M., Han, J. C., Zhou, G., Yin, C., Wang, Q., & Xie, C. (2023). Metamorphic testing harness for the Baidu Apollo perception-camera module. 2023 IEEE/ACM 8th International Workshop on Metamorphic Testing (METE), 9-16. <a href="https://doi.org/10.1109/MET59151.2023.00009">https://doi.org/10.1109/MET59151.2023.00009</a>.
      </p>
      <p id="ref14" className="references">
        [14] Chen, T. Y., Kuo, F., Huai, L., Poon, P., Towey, D., Tse, T. H., & Zhou, Z. Q. (2018). Metamorphic Testing: A Review of Challenges and Opportunities. ACM Computer Surveys, 51(1), 1-27. https://doi.org/10.1145/3143561. <a href="https://doi.org/10.1145/3143561">https://doi.org/10.1145/3143561</a>.
      </p>
      <p id="ref15" className="references">
        [15] Xie, X., Ho, J. W. K., Murphy, C., Kaiser, G. E., Xu, B., & Chen, T. Y. (2011). Testing and validating machine learning classifiers by metamorphic testing. Journal of Systems and Software, 84(8), 544-558. <a href="https://doi.org/10.1016/j.jss.2010.11.920">https://doi.org/10.1016/j.jss.2010.11.920</a>.
      </p>
      <p id="ref16" className="references">
        [16] Zhou, Z. Q., Sun, L., Chen, T. Y., & Towey, D. (2020). Metamorphic Relations for Enhance System Understanding and Usage. IEEE Transactions on Software Engineering, 46(10), 1120-1154. <a href="https://doi.org/10.1109/TSE.2018.2876433">https://doi.org/10.1109/TSE.2018.2876433</a>.
      </p>
      <p id="ref17" className="references">
        [17] Zhou, Z. Q., Xiang, S., & Chen, T. Y. (2016). Metamorphic testing for software quality assessment: A study of search engines. IEEE Transactions on Software Engineering, 42(3), 266-277. <a href="https://doi.org/10.1109/TSE.2015.2478001">https://doi.org/10.1109/TSE.2015.2478001</a>.
      </p>
      <p id="ref18" className="references">
        [18] Zhang, Y., Towey, D., Pike, M., Qiu, R., Jaya, A. T., Huey, S., Zhang, X., & Wu, Y. (2024). Metamorphic Testing of a Steer-by-Wire System: An Intercultural Students-as-Partners Collaboration Experience. *MET 2024*, *51*, 18–25. https://doi.org/10.1145/3679006.3685069. <a href="https://doi.org/10.1145/3679006.3685069">https://doi.org/10.1145/3679006.3685069</a>.
      </p>
      <p id="ref19" className="references">
        [19]  Livshits, V. B., & Lam, M. S. (2005). Finding security vulnerabilities in java applications with static analysis. In Proceedings of the 14th Conference on USENIX Security Symposium (SSYM’05), 14. <a href="https://www.usenix.org/event/sec05/tech/full_papers/livshits/livshits.pdf">https://www.usenix.org/event/sec05/tech/full_papers/livshits/livshits.pdf</a>.
      </p>
      <p id="ref20" className="references">
        [20] Brosch, F., Koziolek, H., Buhnova, B., & Reussner, R. (2012). Architecture-Based Reliability Prediction with the Palladio Component Model. IEEE Transactions on Software Engineering, 38(6), 1319-1339. <a href="https://doi.org/10.1109/TSE.2011.94">https://doi.org/10.1109/TSE.2011.94</a>.
      </p>
      <p id="ref21" className="references">
        [21] Cremer, F., Sheehan, B., Fortmann, M., Kia, A. N., Mullins, M., Murphy, F., & Materne, S. (2022). Cyber risk and cybersecurity: A systematic review of data availability. Cyber risk and cybersecurity: a systematic review of data availability, 47 (3), 698–736. <a href="https://doi.org/10.1057/s41288-022-00266-6">https://doi.org/10.1057/s41288-022-00266-6</a>.
      </p>
      <p id="ref22" className="references">
        [22] Sheehan, B., Murphy, F., Mullins, M., & Ryan, C. (2019). Connected and autonomous vehicles: A cyber-risk classification framework. Transportation Research Part a: Policy and Practice, 124, 523–536. <a href="https://doi.org/10.1016/j.tra.2018.06.033">https://doi.org/10.1016/j.tra.2018.06.033</a>.
      </p>
      <p id="ref23" className="references">
        [23] Kamal, P. (2019). Security of password hashing in cloud. Journal of Information Security, 10 (2), 45–68. <a href="https://doi.org/10.4236/jis.2019.102003">https://doi.org/10.4236/jis.2019.102003</a>
      </p>
      <p id="ref24" className="references">
        [24] Griess, A. (2021). Collaborcrack: A Collaborative Password Cracking Solution for Windows Penetration Testing. <a href="https://digitalcommons.unomaha.edu/university_honors_program/159/">https://digitalcommons.unomaha.edu/university_honors_program/159/</a>.
      </p>
      <p id="ref25" className="references">
        [25] Poston, H. (2020). 10 most popular password cracking tools. Infosecinstitute. <a href="http://resources.infosecinstitute.com/10-popular-password-cracking-tools/">http://resources.infosecinstitute.com/10-popular-password-cracking-tools/</a>.
      </p>
      <p id="ref26" className="references">
        [26] Oxford Languages (2024). Oxford Languages and Google. <a href="https://languages.oup.com/google-dictionary-en"> https://languages.oup.com/google-dictionary-en</a> (accessed April 8, 2025).
      </p>
      <p id="ref27" className="references">
        [27] 1Password. (2022). *What is a hashed password?* 1Password Blog. [https://blog.1password.com/what-is-hashed-password/#:~:text=Hashing is a one-way,algorithm called a hash function](https://blog.1password.com/what-is-hashed-password/#:~:text=Hashing%20is%20a%20one%2Dway,algorithm%20called%20a%20hash%20function).
      </p>
      <p id="ref28" className="references">
        [28] *What is a Brute Force Attack? Definition, Types & How It Works | Fortinet*. (n.d.). Fortinet. <a href="https://www.fortinet.com/resources/cyberglossary/brute-force-attack">https://www.fortinet.com/resources/cyberglossary/brute-force-attack</a> (accessed April 8, 2025).
      </p>
      <p id="ref29" className="references">
        [29] Schneier, B. (1995). Applied cryptography: Protocols, algorithms, and source code in C.
      </p>
      <p id="ref30" className="references">
        [30] Kumar, H., Kumar, S., Joseph, R., Kumar, D., Shrinarayan Singh, S. K., Kumar, A., & Kumar, P. (2013). Rainbow table to crack password using md5 hashing algorithm. 2013 IEEE Conference on Information & Communication Technologies, 433–439. <a href="https://doi.org/10.1109/CICT.2013.6558135">https://doi.org/10.1109/CICT.2013.6558135</a>.
      </p>
      <p id="ref31" className="references">
        [31] OpenWall. (n.d.). John the Ripper password cracker. <a href="https://www.openwall.com/john/">https://www.openwall.com/john/</a> (accessed April 8, 2025).
      </p>
      <p id="ref32" className="references">
        [32] Anonymous. (2001). Maximum Linux Security (2 ed.), 154.
      </p>
      <p id="ref33" className="references">
        [33] Marchetti, K., & Bodily, P. (2022). John the ripper: An examination and analysis of the popular hash cracking algorithm. In 2022 Intermountain Engineering, Technology and Computing (IETC) (pp. 1–6). <a href="https://doi.org/10.1109/IETC54973.2022.9796671">https://doi.org/10.1109/IETC54973.2022.9796671</a>.
      </p>
      <p id="ref34" className="references">
        [34] Hashcat. (n.d.). Hashcat - advanced password recovery. <a href="https://hashcat.net/hashcat/"> https://hashcat.net/hashcat/</a> (accessed April 8, 2025).
      </p>
    </div>
  );
}

