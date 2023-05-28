import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { Button, Card, CardContent, Grid, TextField, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  askButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#1DA1F2',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#0D91E5',
    },
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  topicCard: {
    marginBottom: theme.spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
    cursor: 'pointer',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    width: '50%',
    minWidth: 400,
    maxHeight: '80vh',
    overflowY: 'auto',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
  },
}));

const FAQSection = () => {
  const classes = useStyles();

  const [question, setQuestion] = useState('');
  
  const [faqData, setFaqData] = useState([
    {
      topic: 'Profile Creation',
      questions: [
        {
          question: 'How do I create a profile on the platform?',
          answer: 'To create a profile, navigate to the "Profile" section and click on the "Create Profile" button. Follow the instructions to fill in your information, including your background, work experience, education, achievements, skills, and projects.',
        },
        {
          question: 'How can I showcase my achievements and expertise effectively on my profile?',
          answer: 'Highlight your notable achievements, relevant work experience, educational qualifications, and any projects or initiatives you have been involved in.',
        },
        {
          question: 'Can I submit multiple business ideas?',
          answer: 'Yes, you can submit multiple business ideas if you have multiple innovative concepts to share',
        },

      ],
    },
    {
      topic: 'Idea Submissions',
      questions: [
        {
          question: 'How can I submit my business idea on the platform?',
          answer: 'To submit your business idea, go to the "Idea Submissions" section and click on the "Submit Idea" button. Fill out the submission form with details such as the problem your idea solves, target market, revenue potential, and any existing traction or prototypes.',
        },
        {
          question: 'Is there a specific format or template to follow for idea submissions?',
          answer: 'While there is no strict format, providing clear and concise information about your idea and its potential will help investors evaluate its viability',
        },
        {
          question: 'Can I submit multiple business ideas?',
          answer: 'Yes, you can submit multiple business ideas if you have multiple innovative concepts to share',
        },
 
      ],
    },

    {
      topic: 'Pitch Videos and Presentations',
      questions: [
        {
          question: 'What are some tips for creating an effective pitch video?',
          answer: 'TWhen creating your pitch video, aim for a compelling and concise presentation that effectively conveys the passion, vision, and key elements of your business idea.',
        },
        {
          question: 'Are there any file size or format restrictions for the video upload?',
          answer: 'Supported video formats and size limits will be specified in the upload instructions.',
        },
        {
          question: 'Can I update or replace my pitch video after uploading it?',
          answer: 'You have the flexibility to update or replace your pitch video whenever you want by accessing the "Edit Video" option in the Pitch Videos section.',
        },
      
      ],
    },

    {
      topic: 'Rating and Feedback System',
      questions: [
        {
          question: 'How does the rating and feedback system work?',
          answer: 'The rating and feedback system allows investors to provide valuable input on business ideas. You can rate pitches and provide constructive feedback to help entrepreneurs understand the strengths and weaknesses of their presentations',
        },
        {
          question: 'Can I provide anonymous feedback on business ideas?',
          answer: 'Feedback can be submitted directly through the platform, and entrepreneurs will receive anonymous or attributed feedback, based on your preference.',
        },
        {
          question: 'Will the entrepreneurs receive feedback on their pitches?',
          answer: 'yes entrepreneurs will receive feedback on thier pitches, they will be notified via email',
        },
     
      ],
    },

  ]);




  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);

  const handleAskQuestion = () => {
    if (question) {
      alert('Question has been submitted!');
      setQuestion('');
    }
  };

  const handleAnswerChange = (topicIndex, questionIndex, answer) => {
    const updatedFaqData = [...faqData];
    updatedFaqData[topicIndex].questions[questionIndex].answer = answer;
    setFaqData(updatedFaqData);
  };

  const handleQuestionClick = (questionIndex) => {
    setSelectedQuestionIndex(questionIndex);
  };

  const handleCloseModal = () => {
    setSelectedQuestionIndex(-1);
  };

  const renderModal = () => {
    if (selectedQuestionIndex === -1) {
      return null;
    }

    const selectedQuestion = faqData[selectedQuestionIndex];

    return (
      <Modal
        open={selectedQuestionIndex !== -1}
        onClose={handleCloseModal}
        className={classes.modal}
      >
        <div className={classes.modalContent}>
          <Typography variant="h6" style={{color:'#1DA1F2'}}>How do I create a profile on the platform?</Typography>
          <Typography variant="body1">To create a profile, navigate to the "Profile" section and click on the "Create Profile" button. Follow the instructions to fill in your information, including your background, work experience, education, achievements, skills, and projects.</Typography>
          
        </div>

        {/* <div className={classes.modalContent}>
          <Typography variant="h6">{selectedQuestion.question}</Typography>
          <Typography variant="body1">{selectedQuestion.answer}</Typography>
          
        </div> */}
      </Modal>

      
    );
  };
  

  return (
  <div>
  <h1 className="faq-heading">Frequently Asked Questions</h1>
  <Grid container spacing={4}>
    <Grid item xs={12} sm={10}>
      <Grid container spacing={4}>
        {faqData.map((topic, topicIndex) => (
          <Grid item xs={12} sm={6} key={topicIndex}>
            <Card className={classes.topicCard} onClick={() => handleQuestionClick(topicIndex)}>
              <CardContent>
                <h2>{topic.topic}</h2>
                {topic.questions.map((faq, questionIndex) => (
                  <FAQItem
                    key={questionIndex}
                    question={faq.question}
                    onClick={() => handleQuestionClick(questionIndex)}
                  />
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={12} sm={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5"> Can not find your Question! Ask Us</Typography>
          <TextField style={{marginTop:'10px'}}
            label="Ask a question"
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className={classes.askButton}
            onClick={handleAskQuestion}
          >
            Ask a Question
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  {renderModal()}
</div>

  );
};

export default FAQSection;

