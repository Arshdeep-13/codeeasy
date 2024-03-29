import React, { useRef } from "react";
import "../styles/SpinnerDocs.css";
import Navbar from "./Navbar";
import "../styles/Framework.css";
import { Sidebar } from "./Sidebar";
import Popover from "./Popover";
import Popover2 from "./Popover2";
import Popover3 from "./Popover3";

const PopoverDocs = ({ theme, settheme }) => {
  const codeRef = useRef(null);

  const handleCopyToClipboard = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      alert("Code copied to clipboard!");
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
    }
  };
  return (
    <div className="framework">
      <Navbar theme={theme} settheme={settheme} />
      <div className="subContainer">
        <Sidebar className="w-1/3" theme={theme} settheme={settheme} />
        <div
          className={`w-2/3 relative top-20 container ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="heading">
            <h1
              id="title"
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Popover
            </h1>
            <p>
              A popover component is a user interface element It is designed to
              display additional information or options in a floating window
              that appears above or near the content currently being viewed.
            </p>
          </div>
          <div className="description">
            <h2 className="mb-1">How it works ?</h2>
            <ul>
              <li id="desc">
                To implement a Popover component on your webpage, you'll need to
                wrap the relevant elements within a div under the class name
                '.popover'.
              </li>
              <li id="desc">
                Inside the '.popover' class, your popover content will be
                displayed.
              </li>
              <li id="desc">
                The class name '.popoverhover' is used to designate elements
                that will activate the popover when interacted with, such as
                buttons .
              </li>
              <li id="desc">
                Upon interaction with the trigger element, the popover will
                appear, positioned relative to the trigger as specified by the
                CSS rules.
              </li>
              <li id="desc">
                You can customize the appearance and behavior of the popover
                through CSS and JavaScript, including options for animation,
                positioning, and content.
              </li>
              <li id="desc">
                To dismiss the popover, users can click outside of it or
                interact with a designated close button, depending on your
                implementation.
              </li>
            </ul>
          </div>
          <h2 className="mb-1">
            RadiantReveal: Transform with PopOver Brilliance
          </h2>
          <p>
            Unleashing the power of our Popover component. Following is the
            description of each and everything :-
          </p>
          <ul>
            <h3>New Functionalities:</h3>
            <li>
              Experience a whole new level of interaction as our Popover
              Component now reveals user profiles effortlessly on hover.
            </li>
            <li>
              Hover over any user-triggered popover to instantly glimpse their
              profile details without clicking, enhancing user convenience and
              engagement.
            </li>
            <li>
              Seamlessly integrated, this feature adds a touch of interactivity
              and personalization, ensuring users stay connected and informed at
              all times.
            </li>
            <li>
              Whether it's left, right, top, or bottom, our Popover now
              intelligently aligns text content to ensure optimal readability
              and aesthetic appeal.
            </li>
            <li>
              Say goodbye to awkwardly positioned text and hello to a harmonious
              visual experience that adapts effortlessly to any interface
              layout.
            </li>

            <h3>Improved Features:</h3>
            <li>
              Elevate user engagement with the innovative hover profile preview
              feature, allowing users to effortlessly access profile details
              without clicking.
            </li>
            <li>
              Seamlessly integrated into the Popover Component, this
              functionality provides a smoother and more intuitive browsing
              experience, enhancing overall user satisfaction.
            </li>
            <li>
              Revolutionize text alignment within the Popover Component with the
              introduction of multi-directional text alignment.
            </li>
            <li>
              Experience improved readability and visual appeal as text content
              intelligently adjusts its alignment based on the popover's
              position, ensuring optimal presentation across all interface
              layouts.
            </li>
            <li>
              With these enhanced functionalities, our Popover Component sets a
              new standard for user-centric design, focusing on simplicity and
              efficiency.Users can now enjoy a more fluid and personalized
              interaction with the interface, resulting in increased usability
              and retention rates.
            </li>

            <h3>JavaScript Interaction:</h3>
            <li>
              JavaScript Interaction:
              <p>
                .popover class:It allows manipulation of the popover's display
                properties, such as showing or hiding it
              </p>
              <p>
                .user-profile-button class:It enables the addition of event
                listeners to this button to handle mouseover events.
              </p>
              <p>
                .popover-container class:It allows the addition of event
                listeners to this container to handle mouseleave events, which
                trigger hiding the popover when the mouse leaves the container
                area.
              </p>
            </li>

            <h3>JavaScript Functions:</h3>
            <li>
              JavaScript Functions:
              <p>
                userProfileButton.addEventListener('mouseover', ()= {}):This
                function adds an event listener to the user-profile button for
                the mouseover event. When the user hovers over the user-profile
                button, the function defined inside the event listener is
                executed.
              </p>
              <p>
                container.addEventListener('mouseleave', ()= {}): This function
                adds an event listener to the container element for the
                mouseleave event. When the mouse leaves the container area, the
                function defined inside the event listener is executed.
              </p>
            </li>
          </ul>

          <div className="variant1">
            <div className="render">
              <div className="nav-up">
                <Popover />
              </div>
              <hr />
              <div className="type">
                <button className="copy-btn" onClick={handleCopyToClipboard}>
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={codeRef}>
                  <code>
                    {`<div id="popover">
<span id="popovertext">Sample Popover Text</span>
<button id="popoverhover">Hover Me</button>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="variant2">
            <div className="render">
              <div className="nav-up">
                <Popover2 />
              </div>
              <hr />
              <div className="type">
                <button className="copy-btn" onClick={handleCopyToClipboard}>
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={codeRef}>
                  <code>
                    {`<div id="popover">
<span id="popovertext">Sample Popover Text</span>
<button id="popoverhover">Hover Me</button>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="variant3">
            <div className="render">
              <div className="nav-up">
                <Popover3 />
              </div>
              <hr />
              <div className="type">
                <button className="copy-btn" onClick={handleCopyToClipboard}>
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={codeRef}>
                  <code>
                    {`<div id="popover">
<span id="popovertext">Sample Popover Text</span>
<button id="popoverhover">Hover Me</button>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoverDocs;
