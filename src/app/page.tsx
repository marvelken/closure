"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
const DigitalBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Cover Page
    {
      type: "cover",
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200 text-center p-8">
          <Heart className="w-16 h-16 text-rose-500 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-4 leading-tight">
            A Gentle Place for Someone I Used to Call My Love
          </h1>
          <p className="text-rose-600 text-lg italic mb-8">
            A letter of closure, healing, and hope
          </p>
          <div className="text-rose-500 text-sm mb-5">For Joy 💕ima</div>
          <Image
            src="/images/Cover.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
        </div>
      ),
    },

    // Page 1 - Opening
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-rose-800 mb-6">
            Note to Joy 💕
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Hi Udo Joy Elijah,</p>
            <p>How have you been? Oh well, this is long overdue. 🗓️</p>
            <p>
              Do you remember when I told you to listen to super market flowers,
              when I wanted to write you love text? lol, now please listen to
              Adele Hometown Glory or The Night We Met - Lord Huron. This should
              set a tone atleast, 'cause you have got 18 pages to go through, if you
              read this on a bigger screen it could be better...
            </p>
            <p>
              I hope the gift is beautiful. I hope it doesn't bring you to
              tears. 🎁 It was always hard looking for words to comfort you when
              the date was always near. I never did find those words because I
              never knew how hard it was to be you. 💔
            </p>
          </div>
        </div>
      ),
    },

    // Page 2 - Apology
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Before I go further, I am, in every sense of sincerity and
              genuineness, so sorry I hurt you that much. 😔 I hope someday you
              hear the name Marvel and feel happy for the things he did right,
              and not remember the terrible person he actually was.
            </p>
            <p>
              You deserve some sense of clarity and an apology for how poorly I
              may have treated you. I know you may have forgiven me, and I'm
              happy you have someone to heal your heart - something that even if
              I tried, I wouldn't be able to do. 💝
            </p>
            <p>
              Did you doubt if I loved you? If you did, that would be crazy 😂.
              Do you want to know why I didn't reach out until 6 months after? I
              didn't reach out because we were heading to doom either ways. Our
              love was breaking us more than it was healing us. 💔
            </p>
          </div>
        </div>
      ),
    },

    // Page 3 - The Truth About Love
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I never wanted you to know what it felt like to be emotionally
              abused by someone you loved. When I saw your text, I didn't clear
              the air because I knew you would never reach out, no matter how
              bad you felt... I sincerely wanted us to end. Not because I didn't
              love you, but because I loved you enough to know when to let you
              go. 🕊️
            </p>
            <p>
              I could have begged you until you melted, and sure you would have,
              but I want you to answer me in sincerity: are you in a better
              place now? Did make the right choice? YES, I GUESS. 🌟
            </p>
            <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-300">
              <p className="italic text-rose-800">
                A man that loves you will stand by you - fair! But a man that
                truly loved you will walk away so you can be happy. 💫
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Page 4 - Health & Happiness
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Alright, enough with the love talk. How's your health? Your health
              wads number 6 on my expectations for this year, and it was number
              4 on New Year's Eve born fire night - two-factor authentication
              just in case 😂.
            </p>
            <p>
              I haven't had the time to stalk you, but the little I checked when
              I had time made me smile so hard. 😊 I'm so happy you are happy -
              "God when!" 😌😂 Say hi to your pookie for me 😂. I hope he treats
              you right and does everything right by you. I hope he cherishes
              you and loves you more than I ever did (that's a hard thing to
              pull off, but with time it's very doable). 💕
            </p>
            <p>
              When you get this, can you just have the courtesy to say thank
              you? you proud mofo 😌. I still have all your pictures - all 400
              plus of them. 📸 I do look at them from time to time; I haven't
              had the courage to delete them yet.
            </p>
          </div>
        </div>
      ),
    },

    // Page 5 - Memories & Writing
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I still have our chat, and I went through the last emotional text
              you sent me. You barely write - abeg, try to write often for your
              new partner. It's a beautiful thing because you are such a great
              writer. ✍️💖
            </p>
            <p>oh well, I went to look at our text again 😂 I found this:</p>
          </div>

          <Image
            src="/images/stewChoke.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
        </div>
      ),
    },

    // Page 6 - More Memories
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>You know I meant this, right???</p>
          </div>

          <Image
            src="/images/swore.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>I hope you've fixed your lifestyle, dear? 🌱</p>
          </div>

          <Image
            src="/images/lifestyle.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>lol you were really dramatic:</p>
          </div>

          <Image
            src="/images/dramatic.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
        </div>
      ),
    },

    // Page 7 - Attitude & Retirement
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>And how much I hated your attitude:</p>
          </div>

          <Image
            src="/images/attitude.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In case you wondered if I survived my mum's retirement - yes, I
              did! Everything is much better now. 🎉 I'm sorry I pushed you away
              during it. It wasn't as hard as I thought it would be, you where
              correct when you said we will be fine. I was scared I would stop
              being there for you financially when things went downhill, but it
              wasn't the case afterall...
            </p>
          </div>

          <Image
            src="/images/retirement1.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              This was the day she actually took her bow, it was sad, but we
              thank God. We got a better shop for her, the business is really
              doing fine.
            </p>
          </div>
          <Image
            src="/images/retirement2.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
        </div>
      ),
    },

    // Page 8 - Netflix & Shows
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              And your dedication to your shows 😂. Sorry I took you off Netflix
              - I actually noticed you weren't using it.
            </p>
          </div>

          <Image
            src="/images/pc.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I got you the PC though, but well... I'll keep it 💻. Going
              through our chat, I realized how much I bugged you about my mum.
              I'm so sorry about that. Please forgive me. 🙏
            </p>
            <p>
              I saw your TikTok post about dying young. I don't know if you did
              that because you realized people get emotional with things like
              that and they get to engage, but my best guess was that you were
              just being you. I remember when you said this:
            </p>
          </div>

          <Image
            src="/images/sickness.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
        </div>
      ),
    },

    // Page 9 - Health Concerns & Prayers
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
              <p className="text-rose-800">
                Please don't waste my prayers. 🙏 Don't die anytime soon - give
                me 60 more years! I lost my neighbor, the girl that lived
                upstairs. She died a day before my birthday. I felt crazy for
                real; it ruined my birthday. Now imagine if it were you?? Don't
                ever do me like that. You know I care, and heaven doesn't want
                to see you soon, your mum included. 😢💔
              </p>
            </div>
          </div>

          <Image
            src="/images/result.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Please tell me you are taking treatment already, or this stuff is
              no longer there. Please tell me some good news! 🙏💕
            </p>
            <p>I hope you've bagged more certificates! 📜🎓</p>
          </div>

          <Image
            src="/images/certificate.jpeg"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
        </div>
      ),
    },

    // Page 10 - Her Beautiful Letter (Part 1)
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <h3 className="text-xl font-semibold text-rose-700">
            Your Beautiful Words 💌
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I found your text. I read it once in a while because it was
              wholesome. This is what you sent:
            </p>
          </div>
          <div className="bg-rose-50 p-6 mb-5 rounded-lg border border-rose-200 text-sm">
            <p className="text-gray-700 italic leading-relaxed">
              <em>
                "I'm not sure where to start, but hearing all of this,
                especially from you, feels like my heart is breaking all over
                again. You've been such a huge part of my life. I was so certain
                we'd face the ups and downs together, and that no matter what,
                we'd find a way through. It's hard to accept that something that
                meant so much to me could end here.
              </em>
            </p>
            <p className="text-gray-700 italic leading-relaxed mt-3">
              <em>
                I've loved you with all my heart, and I truly believed we'd grow
                old together. So many of my dreams were built around you -
                sharing a home, seeing the world, building a family. Every
                memory we've created is so precious to me, and I never thought
                we'd be talking about letting go of it all. To me, what we had
                was rare, something I thought would last forever, and realizing
                that might not be the case is painful beyond words.
              </em>
            </p>
          </div>
        </div>
      ),
    },

    // Page 11 - Her Beautiful Letter (Part 2)
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200 text-sm">
            <p className="text-gray-700 italic leading-relaxed">
              <em>
                I understand you feel stuck and that you need to heal on your
                own. Part of me respects that and wants you to have the time and
                space you need to work through everything. But it's also
                heartbreaking for me, because as much as I want you to find
                peace, a big part of me wishes we could heal together, without
                saying goodbye. I always thought we'd get past this, that time
                would help us heal as long as we had each other. The idea of
                moving forward alone feels overwhelming, and I don't know how to
                picture a future without you in it.
              </em>
            </p>
            <p className="text-gray-700 italic leading-relaxed mt-3">
              <em>
                I need time to process this. I know you're saying this out of
                love and because you want us both to be free, to be happy, but
                it's still so hard to let go. I don't want to hold you back if
                this is truly what you need, but please know that it's going to
                take me a while to make sense of all of this and to find my
                footing again.
              </em>
            </p>
          </div>
        </div>
      ),
    },

    // Page 12 - Her Beautiful Letter (Part 3) & TikTok
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200 text-sm">
            <p className="text-gray-700 italic leading-relaxed">
              <em>
                You've meant the world to me. Letting go of everything we had
                feels impossible and hard, but I'm trying to respect your
                decision and accept that you need to heal on your own. Thank you
                for everything you've been to me, for all the memories, and for
                being such an important part of my life. I just hope that,
                wherever life takes us, we both find peace and happiness."
              </em>{" "}
              💔
            </p>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I hope you are happy, and I hope you are so so happy, I tried my
              best to make you happy, but if you care about my happiness please
              forgive me.
            </p>
            <p>
              Yeah, I won't forget your TikTok trends you did with my clothes
              😂😂. What other thing should I clear the air about?? Oh, the fact
              that I'm dating Prema? The girl that caused some fights??
            </p>
            <p>
              She didn't cause anything, for real. Your ex-boyfriend was just a
              whore - a man of less dignity 😂. You told Kkay you would never
              forgive me for that. I understand. I wanted to be happy without
              you in my life. Accepting that my mind wouldn't let us end up
              together was a hard pill to swallow, and she helped me swallow it.
              I had to move on; I had to stop hurting you with the past that you
              have worked so hard to change. 💊
            </p>
          </div>
        </div>
      ),
    },

    // Page 13 - Heart Doesn't Pick & Last Texts
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I couldn't live knowing that past existed. I had to move on, and
              yes, there are many girls out there - why her? The heart doesn't
              get to pick, right? There are thousands of men - why him? You
              can't answer, right?? Same her, But please forgive me ❤️
            </p>
            <p>
              That aside, closure done, I guess. Oh, one more thing: Should I
              still die?? Or go to hell? 😂 Those were your last texts on
              TikTok.
            </p>
            <p>
              Yeah and my mum asked about you so many times, and one day she
              said, "Chimeremuma, where is my Akwa Ibom wife?" 😂😂😂 And I
              said, "Mummy, it is well." That was the last day she asked,
              because whenever I told her I had soup or anything outside bread
              and tea, she'd ask, "Did Joy come around?" "Did Joy baby cook?"
              👩‍🍳💕
            </p>
            <p>
              Joy, I know I messed up real bad. But I wanted us to end because
              it was genuinely killing me. My health was deteriorating - I
              didn't tell you, but every night I slept, I was reminded of stuff
              I thought had gone. 😔
            </p>
          </div>
        </div>
      ),
    },

    // Page 14 - Fresh Start & Clothes
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              And boom, I would lash out at you. I needed a fresh start. You did
              too. I am glad you are doing well for yourself. Keep winning, stay
              healthy, greet daddy for me. Always stay happy. I will too. 🌟💕
            </p>
            <p>
              And please, how many of my clothes do you have, especially that
              ash joggers, my blue shirt, and green shirt? I'll need them. 😂
              You see that I returned your bag? Your shirt is worn out - if not,
              I would have helped you package it, and your towels... I don burst
              them already, no vex. 😂😂 You thief me too! 😂
            </p>
            <p>I attached links to TikToks I saw and remembered you:</p>
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSyn92na/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSyn92na/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSyn5VWu/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSyn5VWu/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSynC3Hf/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSynC3Hf/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSynQuuT/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSynQuuT/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSynupyn/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSynupyn/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSyng5y7/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSyng5y7/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSynQ1vs/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSynQ1vs/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSynuHWS/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSynuHWS/
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZMSynGcvx/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  https://vm.tiktok.com/ZMSynGcvx/
                </a>
              </li>
            </ul>
            <p>
              Maybe in our next world, you will be my Mrs. and I will be your
              Mr. I will do right by you because you deserve everything. 💍 But
              in this world, please, if you get to see my kid and they need your
              help, treat them like you would treat 2019/2020 Marvel. And if I
              see your kid and they need my help, I will treat them like I would
              my 2020 ima. ❤️👶
            </p>
          </div>
        </div>
      ),
    },

    // Page 15 - Closing & Name Commentary
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Yours, Marvel ❤️ (You see how you didn't give me any sweet name
              for five years 😂 - it was just "Marvel" you kept calling me 😂.
              Now you don love, rush give am "pookie" - fake love everywhere!
              😂😂😂😂)
            </p>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm happy to have been part of your story, love. It was worth
              every tear, anger, and laugh - they were all worth it. They taught
              us a lot. Now we will not make those mistakes with our lucky ones.
              💫
            </p>
            <p>
              Hopefully, before you become a wife, I can show you the nice
              places I promised. 🏞️
            </p>
            <p>
              Now I can delete everything. Until we meet again, baby girl. ❤️
              Gracias ❤️😌
            </p>
          </div>
        </div>
      ),
    },

    // Page 16 - Voice Note
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <h3 className="text-xl font-semibold text-rose-700">
            If you don't reach back to me, I want you to know 🎙️
          </h3>
          <div className="bg-blue-50 p-6 mb-5 rounded-lg border border-blue-200">
            <p className="text-gray-700 italic leading-relaxed">
              "I may have forgotten how exactly you sound - they say the voice
              is the first thing you forget - but if you call me while I sleep,
              I will know it is you. I wish you the best in life, the very, very
              best. Keep winning, darling. I'm glad we wrote a great story
              together, one people don't live long enough to experience. God
              bless you for me. Ima-mi. Cheers to the future darling" 🎙️💕
            </p>
          </div>
        </div>
      ),
    },
    //Page 17 - memories
    {
      type: "content",
      content: (
        <div className="p-8 space-y-6">
          <h3 className="text-xl font-semibold text-rose-700">
            Ouch !!, give the images below time to load...{" "}
          </h3>
          <Image
            src="/images/gif1.gif"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
          <Image
            src="/images/gif2.gif"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
          <Image
            src="/images/gif3.gif"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />
          <Image
            src="/images/gif4.gif"
            alt="Description"
            width={500}
            height={100}
            className="w-full h-auto mb-5"
          />

          <div className="bg-blue-50 p-6 mb-5 rounded-lg border border-blue-200">
            <p className="text-gray-700 italic leading-relaxed">
              Now I can get rid of them. I Love you. Gracias. 💕
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Book Container */}
        <div
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
          style={{ minHeight: "600px" }}
        >
          {/* Page Content */}
          <div className="relative h-full">
            {pages[currentPage].content}

            {/* Page Number */}
            <div className="absolute bottom-4 right-8 text-gray-400 text-sm">
              {currentPage + 1} of {pages.length}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6 px-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentPage === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-rose-600 hover:bg-rose-100 hover:text-rose-800"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          {/* Page Dots */}
          <div className="flex space-x-2 overflow-x-auto max-w-md">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                  index === currentPage
                    ? "bg-rose-500"
                    : "bg-gray-300 hover:bg-rose-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentPage === pages.length - 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-rose-600 hover:bg-rose-100 hover:text-rose-800"
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-rose-400 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalBook;
