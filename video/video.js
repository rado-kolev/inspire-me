// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  // Create a GSAP timeline
  const tl = gsap.timeline();

  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "+=1");
  tl.fromTo(".banner", { opacity: 0 }, { opacity: 1 }, "-=1");
});

// *** Aray with videos data ***

const videosData = [
  {
    id: 1,
    image: '../video/assets/Alvin_Law/Alvin_Law.png',
    text: `Alvin is an attitude expert and keynote speaker who overcame a serious birth defect to lead a fulfilling life through perseverance and determination to overcome adversity. In the early 1960's, over 13 000 babies around the world were born with serious birth defects as a direct result of Thalidomide, a drug that was prescribed to relieve morning sickness in pregnant women. Alvin was one of them in his case, just a couple of the tiny pills were enough to cause him to be born without arms. At a time when disabilities were less understood, those around him through the life that lay before Alvin would be one of prejudice, abjection and suffering. However, Alvin didn't give up, and thanks to his courage and the caring and nurturing hand of his adoptive parents, Alvin has gone on to become one of the most impressive motivational speakers in the world.`,
    video: '../video/assets/Alvin_Law/Alvin_Law.mp4',
  },
  {
    id: 2,
    image: '../video/assets/Arnold/arnold.png',
    text: `Arnold Schwarzenegger first gained fame as a bodybuilder, using that as a launching point to become a huge Hollywood star and, later, the governor of California. Arnold Schwarzenegger, in full Arnold Alois Schwarzenegger, (born July 30, 1947, Thal, near Graz, Austria), Austrian-born American bodybuilder, film actor, and politician who rose to fame through roles in blockbuster action movies and later served as governor of California (2003-11).`,
    video: '../video/assets/Arnold/Arnold.mp4',
  },
  {
    id: 3,
    image: '../video/assets/David_Goggins/David_Goggins.png',
    text: `American ultramarathon runner, ultra-distance cyclist, triathlete, motivational speaker and author,David Goggins is a retired United States Navy SEAL and former United States Air Force Tactical Air ControlParty member, who served in the War in Afghanistan and the Iraq War. He is a former world record holder for the most pull-ups done in 24 hours. David Goggins is a retired Navy SEAL and is the only member of the U.S. Armed Forces to complete SEAL training(including two Hell Weeks), the U.S. Army Ranger School (where he graduated as Enlisted Honor Man) and Air Force Tactical Air Controller training. An accomplished endurance athlete, Goggins has completed over 60 ultra-marathons, triathlons, and ultra-triathlons, setting new course records and regularly placing in the top five. He once held the Guinness World Record for pull-ups completing 4030 in 17 hours, and he's a sought after public speaker.`,
    video: '../video/assets/David_Goggins/David_Goggins.mp4',
  },
  {
    id: 4,
    image: '../video/assets/Jamie_Andrew/JamieAndrew.png',
    text: `Quadruple amputee Jamie Andrew - he lost his hands and feet from frostbite after being trapped on the Mont Blanc massif in the Graian Alps - is a seriously motivational speaker whose story cannot fail to inspire anyone who hears it. The Scottish mountaineer believes that the only limitations preventing people from reaching their full potential are self-imposed. So he aims to encourage people to discard the misconceptions that stop them being "all they can be". Just three and a half months after losing his feet and hands Jamie was walking on prosthetic legs and washing, dressing and feeding himself. The motivational speaker was also back into work as a manager at the company that employed him before his fateful climb. Far more than just doing fine, Jamie has embarked on several sports challenges, getting into skiing, running (he completed the London Marathon), swimming, caving, snow-boarding, sailing, paragliding and orienteering. Incredibly, he has also gone back to mountaineering, scaling Britain's highest mountain Ben Nevis, an achievement that was recorded for the BBC documentary Climb Back. As a motivational speaker, Jamie Andrew - who has authored the book Life And Limb and raised many tens of thousands of pounds for charities.`,
    video: '../video/assets/Jamie_Andrew/Jamie_Andrew.mp4',
  },
  {
    id: 5,
    image: '../video/assets/Jim_Lawless/Jim_Lawless.png',
    text: `Jim Lawless is a British motivational speaker and esteemed author, whose presentations and best-selling book, Taming Tigers, have been viewed and read by over half a million people, across five continents. As a motivational speaker, he is regarded as one of the best on the circuit, due to his unwavering dedication to inspire others. Jim insists on testing his principles on himself before advising others, to ensure the quality of what he believes in - for example, Jim used Taming Tigers to become Britain's deepest freediver, proving its validity as a product. In doing so, Jim became the first British person to dive below the 100m barrier, astoundingly, on a single breath of air. Additionally, when challenged by his audience, Jim became a jockey in 12 months thanks to Taming Tigers. In the beginning, he was three stone too heavy so could not ride a horse. To overcome this, using the Ten Rules as his guide, Jim lost the weight and succeeded in his challenge. His tried and tested methods of personal development has helped thousands of people to realise their true potential, a notion that he shares through his public speaker.`,
    video: '../video/assets/Jim_Lawless/Jim_Lawless.mp4',
  },
];

const videosContainer = document.querySelector('.videos__container');

// Loop through the videosData array and generate HTML for each object
videosData.forEach((video) => {
  const videoItem = document.createElement('div');
  videoItem.classList.add('video__item');

  videoItem.innerHTML = `
    <div class="video__item-info">
      <img src="${video.image}" alt="Video Image">
      <p class='video__item-text'>${video.text}</p>
    </div>
    <video controls>
      <source src="${video.video}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;

  videosContainer.appendChild(videoItem);
});
