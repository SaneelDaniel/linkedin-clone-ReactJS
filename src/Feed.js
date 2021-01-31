import CreateIcon from "@material-ui/icons/Create";
import React, { useState } from "react";
import "./Feed.css";
import Post from "./Post";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {/* inputOption */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC16E"
          />
        </div>
      </div>

      {/* Posts */}

      {/* Left from here for next day !!!! */}
      {posts.map((post) => (
        <Post />
      ))}
      {/* Left from here for next day !!!! */}

      <Post
        name="DanielSaneel"
        description="This is a test"
        message="Well the world is full of knowledge and we just need to go get it"
      />
    </div>
  );
}

export default Feed;
