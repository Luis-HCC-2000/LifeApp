let steps=["Assessment and Goal Setting", "Identification of Cognitive Distortions", "Challenging and Restructuring Thoughts", "Behavioral Experiments and Exposure", "Skill Building and Coping Strategies", "Homework Assignments", "Monitoring Progress", "Termination and Relapse Prevention", "Follow-Up and Support" ]

const lifeTraps = {
    firstAssessment: [
    {
      title: "Emotional Deprivation",
      questionnaire: [
        "I feel like I'm often lonely or emotionally empty.",
        "I feel like I have a strong desire for love and affection that is not consistently met.",
        "I feel like I tend to be unloved or unwanted."
      ]
    },
    {
      title: "Abandonment/Instability",
      questionnaire: [
        "I feel like I worry a lot about being abandoned or left alone.",
        "I feel like I have a history of unstable or unreliable relationships.",
        "I feel like I often expect that people will eventually leave me."
      ]
    },
    {
      title: "Mistrust/Abuse",
      questionnaire: [
        "I feel like I find it difficult to trust others.",
        "I feel like I have been betrayed or mistreated in past relationships.",
        "I feel like I am often suspicious of others' intentions."
      ]
    },
    {
      title: "Social Isolation/Alienation",
      questionnaire: [
        "I feel like I often feel like an outsider or different from others.",
        "I feel like I have difficulty forming close or meaningful relationships.",
        "I feel like I often feel disconnected from others."
      ]
    },
    {
      title: "Defectiveness/Shame",
      questionnaire: [
        "I feel like I frequently feel that I'm not good enough.",
        "I feel like I experience intense shame or self-criticism.",
        "I feel like I often feel like I'm flawed or unlovable."
      ]
    },
    {
      title: "Failure to Achieve",
      questionnaire: [
        "I feel like I am afraid of failing or not living up to expectations.",
        "I feel like I avoid taking on new challenges or responsibilities.",
        "I feel like I often feel like a failure."
      ]
    },
    {
      title: "Dependence/Incompetence",
      questionnaire: [
        "I feel like I rely heavily on others for guidance and support.",
        "I feel like I doubt my ability to handle life's demands on my own.",
        "I feel like I often feel helpless or incapable."
      ]
    },
    {
      title: "Vulnerability to Harm or Illness",
      questionnaire: [
        "I feel like I worry excessively about things going wrong or bad things happening.",
        "I feel like I take extensive precautions to prevent potential harm or danger.",
        "I feel like I am often anxious about my health or safety."
      ]
    },
    {
      title: "Enmeshment/Undeveloped Self",
      questionnaire: [
        "I feel like I often feel overly influenced or controlled by others.",
        "I feel like I struggle to define my own identity and needs.",
        "I feel like I often prioritize others' desires over my own."
      ]
    },
    {
      title: "Subjugation",
      questionnaire: [
        "I feel like I tend to yield to others' wishes or demands even if it goes against my own desires.",
        "I feel like I often feel compelled to comply with others' expectations.",
        "I feel like I have difficulty asserting myself."
      ]
    },
    {
      title: "Self-Sacrifice",
      questionnaire: [
        "I feel like I frequently put others' needs before my own.",
        "I feel like I neglect my own well-being for the sake of others.",
        "I feel like I feel guilty when I focus on my own needs."
      ]
    },
    {
      title: "Approval-Seeking/Recognition-Seeking",
      questionnaire: [
        "I feel like I place great importance on gaining approval from others.",
        "I feel like I seek external validation and praise.",
        "I feel like I often feel inadequate if others don't approve of me."
      ]
    },
    {
      title: "Negativity/Pessimism",
      questionnaire: [
        "I feel like I tend to focus on the negative aspects of situations.",
        "I feel like I have a pessimistic outlook on life.",
        "I feel like I often anticipate the worst outcome."
      ]
    },
    {
      title: "Emotional Inhibition",
      questionnaire: [
        "I feel like I have difficulty expressing my emotions.",
        "I feel like I tend to suppress my feelings.",
        "I feel like I often hide my true emotions from others."
      ]
    },
    {
      title: "Unrelenting Standards/Hypercriticalness",
      questionnaire: [
        "I feel like I set high, often unrealistic, standards for myself.",
        "I feel like I am overly critical of my own performance.",
        "I feel like I have a strong need to be perfect."
      ]
    },
    {
      title: "Entitlement/Grandiosity",
      questionnaire: [
        "I feel like I sometimes feel superior to others.",
        "I feel like I expect special treatment or privileges.",
        "I feel like I disregard the needs and feelings of others."
      ]
    },
    {
      title: "Insufficient Self-Control/Self-Discipline",
      questionnaire: [
        "I feel like I struggle to control my impulses or emotions.",
        "I feel like I engage in self-destructive behaviors.",
        "I feel like I have difficulty managing my own actions."
      ]
    },
    {
      title: "Other-Directedness",
      questionnaire: [
        "I feel like I prioritize others' needs and desires over my own.",
        "I feel like I often neglect my own self-fulfillment.",
        "I feel like I feel uncomfortable asserting my own needs."
      ]
    }
  ],
  getTitles:function(){
    let titles=[]
    this.firstAssessment.forEach(lifeTrap => {
        titles.push(lifeTrap.title)
    });
    return titles
  },
  getQuestionnaire:function(lifeTrapTitle){
    for (let index = 0; index < this.firstAssessment.length; index++) {
        const element = this.firstAssessment[index];
        if(element.title== lifeTrapTitle){
            return element.questionnaire
        }
    }
    console.error('Title not found: ' + lifeTrapTitle)
  }
};

let titles=lifeTraps.getTitles()

let asessment={
    questionary:[]
}



// Identify Thought Patterns, 
//  Get Each characteristic, 
// Then Emotional Impact, 
// then behavioral patterns (specific behaviors and coping mechanisms), 
// how much does it affect in interpersonal relationships, 
// how the schema affects their personal life and professional life, 
// determine if it impact functional impairment, 
// asess the severity and duration, 
// feedback from the individual
// professional assessment