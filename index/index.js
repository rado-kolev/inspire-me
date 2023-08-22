// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Check if the skipIntro query parameter is present
  const urlParams = new URLSearchParams(window.location.search);
  const skipIntro = urlParams.has('skipIntro');

  if (!skipIntro) {

    // ********** Onload Animation ************
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 2.5, stagger: 0.5 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".banner", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  } else {
    const introElement = document.querySelector('.intro');
    if (introElement) {
      introElement.remove();
    }
  }
});


// ********* Display Changes ************

const changes = [
  {
    id: 1,
    title: 'Take Action',
    text: "Literally, take that very first step. Maybe you want to get healthier, sign up for the gym or even simpler, get out for a walk. Perhaps you want to switch up careers, start researching how to get into the field of your choice. A lot of people talk and complain about their life. Yet, very few actually take steps toward changing it or making their way towards what they want. Don't be part of that majority. <strong>Get up, and do something.</strong>"
  },
  {
    id: 2,
    title: 'Meditate',
    text: "Seriously. Our attention is pulled in so many directions throughout our days. But clearing your mind and focusing your attention for a set amount of time can really flip things upside-down. Plus, the benefits of meditation are endless, including decreasing stress and anxiety, increasing self-awareness, decreasing negative emotions, increasing patience, enhancing creativity, improving mental clarity, and more."
  },
  {
    id: 3,
    title: 'Embrace the Idea That No One Cares',
    text: "We spend huge chunks of our life caring what other people think. Then, we get sad when others don't care enough. Here's a little secret that can flip your world upside-down: <strong>No one cares.</strong> And we don't mean that in a no-one-loves-you-bullying-kind-of-way. More so, this is another way to look at the whole idea that what you do only matters to you and your life. Other opinions, they don't matter. Why? Because they aren't you. Plus, if no one cares, then you are free to fail. You are free to try, and try again. When you start thinking this way, you start getting so much more out of life."
  },
  {
    id: 4,
    title: 'Start Your Day With An Intention',
    text: "Okay, this is ultra-easy. You probably set an alarm every morning. After your alarm goes off, set a reminder to set an intention for your day. You want to have a good day everyday? Great, your intention is to have a good day. Alternatively, you can also be more specific. If you have a big presentation at work, maybe your intention is to calmly and enthusiastically present your notes. <strong>The next part of this is to repeat your intention between 5-10 times, similar to how you would with affirmations.</strong> This can literally ingrain your intention in your mind, allowing you to carry it with you throughout your day."
  },
  {
    id: 5,
    title: 'Choose Being Proactive Over Being Reactive',
    text: "No, you don't have to go nuts here and prepare a post apocalyptic bag or anything extreme. <strong>It's about preparing for the possibility of things that could happen.</strong> Do you have a spare tire in your car? If not, get one! Do you often opt for eating out because you're too lazy to prepare meals? Sign up for a meal prep service (or prepare your meals ahead of time!). There are tons of ways to be proactive in life. And when you are, your future self will thank your past self, and it leads to this cycle of confidence and self-assurance that you just can't get any other way.Life doesn't have to be so hard all the time. Prepare yourself for the realistic possibilities, and you'll be smooth sailing (at least, most of the time!)."
  },
  {
    id: 6,
    title: 'Scroll Less',
    text: "Social media addiction is all-too-real. And even if you don't have an “addiction,” scrolling can be a serious time-killer where you don't get a whole lot of good out of it (imagine if you spent those 2-4 hours a day doing something productive? Where could you be?). So, here's your big change: <strong>Simply, scroll less.</strong> Better yet, download an app, such as RescueTime, that can help you monitor and track where you spend your time online. The data doesn't lie.From there, you can determine an appropriate and healthy amount of time for scrolling, spending your precious time on more fulfilling activities or tasks."
  },
  {
    id: 7,
    title: 'Fulfill Your Needs First',
    text: "If you're a people-pleaser (guilty!), this one is for you. You aren't allowed to do anything for anyone else until your needs are met first. It's like in an airplane, you never put on someone else's oxygen mask before you put on your own."
  },
  {
    id: 8,
    title: 'Talk Less, Listen More',
    text: "Many of us listen to respond, instead of listening to understand. The key here is to actively listen and focus on taking in the information being transmitted to you. Take time to pause before responding if a response is required."
  },
  {
    id: 9,
    title: 'Say “No”',
    text: "If you feel depleted, exhausted, and stretched out all the time, learning to say “no” is one of the best things you can do in your life. Arguably, it can transform you and your life, giving you more time for the things you need and less time to others. This 100% falls in line with putting your needs first before helping others."
  },
  {
    id: 10,
    title: 'Move More',
    text: "This doesn't have to be anything extreme. But there's tons of evidence backing up how exercise is good for your mental and physical health. Try a few jumping jacks, a quick walk, a few push ups, a squat or two, or a quick bike around the block. Again, keep it ultra simple. <strong>The goal is simple: Move more!</strong>"
  },
  {
    id: 11,
    title: 'Use What You Have',
    text: "Let's face it: We're a pretty wasteful species. From plastics to food getting thrown out, we aren't exactly ultra-conservationists (even though some of us try really hard to be!). <strong>So, one little thing you can do to change your life (and make a small dent in changing the world) is by using what you already have.</strong> Don't bother buying a new dress for that night out when you already have one in your closet. Don't Uber Eats that next dinner when you have fresh produce in your fridge ready to chop up. When you live life this way, you, inevitably, face less guilt, and it just feels good."
  },
  {
    id: 12,
    title: 'Notice Patterns in Your Life, Then Change Them',
    text: "It's unfortunate but most of us have a few toxic traits. Maybe you always go for the guy who barely pays you any attention or maybe you're noticing friends tend to ditch you for the same reason over and over again, here's what's happening: <strong>It's not them, it's you.</strong> Notice these patterns, and then commit to changing them. <strong>How can you do things differently? What can you improve and change?</strong>"
  },
];

// Define the displayChanges function
const displayChangesItems = (changesItems) => {
  let displayChanges = changesItems.map(function (item) {
    return `<article class='changes__item'>
      <div class='changes__item-info'>
        <h4>${item.title}</h4>
        <p class='changes__item-text'>
          ${item.text}
        </p>
      </div>
    </article>`;
  });

  if (displayChanges.length === 0) {
    displayChanges = '';
  }
  displayChanges = displayChanges.join('');
  return displayChanges;
};

const changesCenter = document.querySelector('.changes__container');
changesCenter.innerHTML = displayChangesItems(changes);

// Load items
window.addEventListener('DOMContentLoaded', function () {
  displayChangesItems(changes);
});