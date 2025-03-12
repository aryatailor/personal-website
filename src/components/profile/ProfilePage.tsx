import React from "react";
import ProfileHeader from "./ProfileHeader";
import TimelineSection, { TimelineItemData } from "./TimelineSection";

const ProfilePage: React.FC = () => {
  // Yesterday timeline items
  const yesterdayItems: TimelineItemData[] = [
    {
      id: 1,
      content: (
        <>
          <span>strategy & ops for</span>
          <a href="#" className="text-inherit underline">
            {" "}
            backyard games company
          </a>
          <span>
            . tripled revenue & expanded to 300+ retail stores in 6 months.
          </span>
        </>
      ),
    },
    {
      id: 2,
      content:
        "captained robotics team to worlds, learned more about management & fundraising than engineering",
    },
    {
      id: 3,
      content: (
        <>
          <span>collected</span>
          <a href="#" className="text-inherit underline">
            {" "}
            600+ units of blood
          </a>
          <span>,</span>
          <a href="#" className="text-inherit underline">
            {" "}
            volunteered, & raised $30k+ for charity through rec sports
            tournaments and things of the sort
          </a>
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <span>sprained my ankle then did some</span>
          <a href="#" className="text-inherit underline">
            {" "}
            neurorobotics research
          </a>
          <span>, also interned at a</span>
          <a href="#" className="text-inherit underline">
            {" "}
            defense company
          </a>
          <span>for a bit</span>
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <span>traveled for free @</span>
          <a href="#" className="text-inherit underline">
            {" "}
            Business Today 2024 IC (NYC!)
          </a>
          <span>and @</span>
          <a href="#" className="text-inherit underline">
            {" "}
            NGA Conference 2025 Case Competition (up $8k in Vegas)
          </a>
        </>
      ),
    },
    {
      id: 6,
      content: (
        <>
          <span>
            went skydiving once and haven't stopped talking about it since. also
            created some haunted houses and occasionally
          </span>
          <a href="#" className="text-inherit underline">
            {" "}
            won trivia
          </a>
        </>
      ),
    },
  ];

  // Today timeline items
  const todayItems: TimelineItemData[] = [
    {
      id: 1,
      content:
        "studying global health & economics @ ASU. also i like competing in things",
    },
    {
      id: 2,
      content: (
        <>
          <span>revolutionizing ev charging @</span>
          <a href="#" className="text-inherit underline">
            {" "}
            BreatheEV
          </a>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <span>
            empowering entrepreneurs and giving out microloans through the
          </span>
          <a href="#" className="text-inherit underline">
            {" "}
            Arizona Microcredit Initiative
          </a>
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <span>business consulting @</span>
          <a href="#" className="text-inherit underline">
            {" "}
            The Luminosity Lab
          </a>
          <span>and mentoring @</span>
          <a href="#" className="text-inherit underline">
            {" "}
            HEALab
          </a>
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <span>figuring out ways to travel for free, and managing an</span>
          <a href="#" className="text-inherit underline">
            {" "}
            ig account for my im soccer team
          </a>
        </>
      ),
    },
    {
      id: 6,
      content:
        "researching different ai models and learning to vibe code because its cool",
    },
  ];

  // Tomorrow timeline items
  const tomorrowItems: TimelineItemData[] = [
    {
      id: 1,
      content:
        "graduating with an economics degree and maybe a global health degree",
    },
    {
      id: 2,
      content:
        "scrolling on x and rereading tomorrow, and tomorrow, and tomorrow (Zevin)",
    },
    {
      id: 3,
      content: "building for me and ai strategy for others",
    },
    {
      id: 4,
      content:
        "winning an im soccer championship, creating spotify playlists, and stargazing",
    },
    {
      id: 5,
      content: "traveling to the bay in may (not for free)",
    },
    {
      id: 6,
      content: "world cup 2026 + trip with 4Ti+Kaden asap",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-none text-white mx-auto px-20 py-10 max-md:max-w-[991px] max-md:p-[30px] max-sm:max-w-screen-sm max-sm:p-5">
        <ProfileHeader />
        <div className="flex justify-between gap-10 max-md:flex-col max-md:gap-[60px]">
          <TimelineSection
            title="YESTERDAY:"
            items={yesterdayItems}
            variant="yesterday"
          />
          <TimelineSection title="TODAY:" items={todayItems} variant="today" />
          <TimelineSection
            title="TOMORROW:"
            items={tomorrowItems}
            variant="tomorrow"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
