import React from "react";

const commentsData = [
  {
    id: "1",
    name: "Alice Johnson",
    text: "This is a great post! Thanks for sharing.",
    replies: [
      {
        id: "1.1",
        name: "Bob Smith",
        text: "I agree, Alice! Very insightful.",
        replies: [
          {
            id: "1.1.1",
            name: "Charlie Adams",
            text: "Absolutely, this topic deserves more attention.",
            replies: [],
          },
        ],
      },
      {
        id: "1.2",
        name: "Diana Wright",
        text: "Does anyone have more resources on this?",
        replies: [],
      },
    ],
  },
  {
    id: "2",
    name: "Ethan Harris",
    text: "I found this post to be very helpful, especially the examples.",
    replies: [
      {
        id: "2.1",
        name: "Fiona Green",
        text: "Same here! The examples made it easy to understand.",
        replies: [],
      },
    ],
  },
  {
    id: "3",
    name: "Grace Lee",
    text: "I think there are a few errors in the data. Can someone confirm?",
    replies: [
      {
        id: "3.1",
        name: "Hank Brown",
        text: "I didn't notice any errors, Grace. Can you point them out?",
        replies: [],
      },
    ],
  },
  {
    id: "4",
    name: "Ian White",
    text: "Has anyone implemented this solution in production?",
    replies: [
      {
        id: "4.1",
        name: "Jill Black",
        text: "Yes, Ian. We used it last month, and it's working well!",
        replies: [
          {
            id: "4.1.1",
            name: "Kevin Blue",
            text: "That's great to hear, Jill. What challenges did you face?",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Laura Green",
    text: "What is the best way to handle edge cases in this scenario?",
    replies: [],
  },
  {
    id: "6",
    name: "Mike Silver",
    text: "I love the simplicity of this approach.",
    replies: [
      {
        id: "6.1",
        name: "Nancy Gold",
        text: "Yes, simplicity is key for maintainability!",
        replies: [],
      },
    ],
  },
  {
    id: "7",
    name: "Oscar Brown",
    text: "Can this be adapted for different environments?",
    replies: [
      {
        id: "7.1",
        name: "Paula Gray",
        text: "It should be adaptable with some minor changes.",
        replies: [],
      },
    ],
  },
  {
    id: "8",
    name: "Quincy Adams",
    text: "Are there any performance benchmarks for this method?",
    replies: [],
  },
  {
    id: "9",
    name: "Rachel Blue",
    text: "Can you share more examples for clarity?",
    replies: [
      {
        id: "9.1",
        name: "Steve Red",
        text: "Sure, Rachel. I'll post some examples shortly.",
        replies: [],
      },
    ],
  },
  {
    id: "10",
    name: "Tina Violet",
    text: "This is a game-changer for our workflow!",
    replies: [
      {
        id: "10.1",
        name: "Uma Brown",
        text: "Agreed, Tina. It simplifies a lot of complex processes.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex gap-4 mt-4">
      <i className="ri-account-circle-fill text-4xl"></i>
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return commentsData.map((comment) => (
    <div key={comment.id}>
      
      {/* Add the key prop here */}
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className="pl-10 border-l-2 ml-4 border-white">
          <CommentList commentsData={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="-ml-20 p-2">
      <h1 className="text-2xl font-semibold">Comments:</h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
