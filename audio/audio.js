// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  // Create a GSAP timeline
  const tl = gsap.timeline();

  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "+=1");
  tl.fromTo(".banner", { opacity: 0 }, { opacity: 1 }, "-=1");
});

// ***** Array with guest audios data *****
const audiosData = [
  {
    id: 1,
    image: '../audio/assets/Dwayne_Johnson/dwayne-johnson.png',
    text: `Dwayne "The Rock" Johnson was born into a professional wrestling family in 1972. An injury ended his college football career, so he entered the ring with the World Wrestling Federation. As "The Rock," he famously feuded with wrestler Steve Austin. Dwayne Johnson has proved himself a success in the arena and on the silver screen. He has achieved a level of success as a wrestler and entertainer that no one else has been able to match. Professional wrestling gave him the love and admiration of the world and he took it one step further by proving his abilities in acting by playing diverse roles, each of which were truly great performances.
    <br>
    <br>
    "Success isn't always about 'Greatness', it's about consistency. Consistent, hard work gains success. Greatness will come."`,
    audio: '../audio/assets/Dwayne_Johnson/Dwayne_Johnson.mp3',
  },
  {
    id: 2,
    image: '../audio/assets/Eric_Thomas/eric_thomas.png',
    text: `A high school dropout. A homeless man. And now? Probably the most passionate motivational speaker ever. If we all had as much passion as him we would be on another level. He can motivate you to another level, his speeches are intense. I would suggest to every person that's alive at this very moment and can still breathe to check out some of his speeches - You won't be dissapointed! Thomas does not sugarcoat anything. He is nicknamed the hip hop preacher and he is as blunt as a rapper. Thomas also talks about how it may take years to accomplish your definition of success. But, if you are truly committed to your goals and willing to make the necessary sacrifices you will be successful.
    <br>
    <br>
    "When you want to succeed as bad as you want to breathe, then you'll be successful."`,
    audio: '../audio/assets/Eric_Thomas/Eric_Thomas.mp3',
  },
  {
    id: 3,
    image: '../audio/assets/Les_Brown/les_brown.png',
    text: `Les Brown was born with his twin brother Wesley on February 17, 1945 in a low-income section of Miami, Florida in an abandoned building. He was subsequently given up for adoption and adopted by Mamie Brown, a then 38-year-old single woman who worked as a cafeteria attendant and domestic assistant. He was declared "educably mentally retarded" while in grade school. Despite the obvious self-esteem issues this created, with the encouragement of his mother and assistance by a helpful teacher in high school, he learned how to reach his full potential, a key point in many motivational speeches he gives now. Brown speeches focus on the importance of having a strong belief in yourself. And he teaches that you need to be bold and have supreme self-confidence. Brown also believes many people that set goals are setting their bar too low.
    <br>
    <br>
    "Don't let someone else's opinion of you become your reality."`,
    audio: '../audio/assets/Les_Brown/Les_Brown.mp3',
  },
  {
    id: 4,
    image: '../audio/assets/Nick_Vujicic/nick-vujicic.png',
    text: `Nick Vujicic was born with no arms and no legs. Yet, he is a very happy man and he lives life with joy. He is also a funny guy with a good sense of humor. Vujicic tells jokes in his speeches and pokes fun at himself. He teaches the importance of determination and never giving up. And quitting is not in his vocabulary. He believes nothing is impossible. And Vujicic stresses the value of not focusing on what you cannot do instead focus in life on what you can control and what you can do.
    <br>
    <br>
    "The challenges in our lives are there to STRENGTHEN our CONVICTIONS. They are NOT there to run us over."`,
    audio: '../audio/assets/Nick_Vujicic/Nick_Vujicic.mp3',
  },
  {
    id: 5,
    image: '../audio/assets/Tony_Robbins/tony-robbins.png',
    text: `The 6-foot 7-inch tall Tony Robbins has a commanding presence and deep booming voice. And he is very passionate speaker that loves helping people achieve their goals and to get more fulfillment out of their lives. Many motivational speakers are mainly fluff and not much substance. However, Robbins truly understands the psychology of success. "Long ago, I realized that success leaves clues, and that people who produce outstanding results do specific things to create those results", said Robbins. He begins his speeches by starting with basics such as what to you want to accomplish in your life and why do you want to achieve that goal. Then, Robbins goes into more detail about techniques and concepts that can help you accomplish your goals.
    <br>
    <br>
    "If you do what you've always done, you'll get what you've always gotten."`,
    audio: '../audio/assets/Tony_Robbins/Tony_Robbins.mp3',
  },
];

const audiosContainer = document.querySelector('.audios__container');


// Loop through the videosData array and generate HTML for each object

audiosData.forEach((audio) => {
  const audioItem = document.createElement('div');
  audioItem.classList.add('audio__item');

  audioItem.innerHTML = `
    <div class="audio__item-info">
      <img src="${audio.image}" alt="audio image">
      <p class='audio__item-text'>${audio.text}</p>
      <audio controls>
      <source src="${audio.audio}" type="audio/mp3">
      Your browser does not support the audio tag.
      </audio>
    </div>
    
  `;

  audiosContainer.appendChild(audioItem);
});
