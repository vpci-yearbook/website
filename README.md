# Yearbook site

The Yearbook Committee's official website, serving VPCI's official photo gallery.

## Technologies
- Next.js
- Shadcn
- [Python backend with FastAPI and MongoDB](https://github.com/vpci-yearbook/server)

## Inspiration

Traditionally, the Yearbook Commitee creates a physical yearbook each year. We recruit a small group of photographers to work under us and gather photos. We're making this site to address the following problems with this approach:
1. The yearbook being a once-a-year thing.
2. Limited opportunities for contribution; there's the huge filter of 'you need photography/design skills and you need to make an application and you need to do a bunch of work and adhere to all our deadlines etc.' if you want to make any contribution to the yearbook.
3. Limited representation in the yearbook. E.g. including enough photos of academics + 9th graders was a struggle last year because most of our photos were of gr. 10, 11, 12 IB students.

How do we fix these problems?
1. We're making a platform to serve students year-round.
2. Any student can make regular micro-contributions through our platform.
3. Students can upload their own photos, ensuring that they can make it into the yearbook even if they have limited interaction with our photographers.

## Key features

1. Photo upload allows any student to upload a photo that could potentially make it to the yearbook.
2. Comprehensive gallery of photos, regularly updated, accessible year-round.

## Who does this benefit?
1. Average students
 - Could see their own photos or photos relevant to them end up in the gallery or yearbook
 - Can view our photos digitally (many advantages over analog photos in a physical yearbook)
 - Have access to a gallery of all our photos in the first place (I think it's pretty fun to just look through the photos lol). And we'll import as many photos as we can from previous years and work on gathering future photos so that this gallery can serve as a comprehensive archive of their high school years
2. Clubs and organisations
 - Can better represent their activities and events by taking their own photos instead of relying on Yearbook Comittee photographers (Some clubs take hundreds of photos per year, but they never end up in the yearbook because their photographers aren't involved with the Yearbook Comittee)
3. Yearbook editors and photographers
 - Editors don't have to struggle to include diverse photos (more choice)
 - Photographers aren't pressured to constantly get photos
4. Alumni, parents, etc.
 - Can easily check up on how the school's doing these days

## Demo

[Demo vid (no sound)](https://www.youtube.com/watch?v=Yj6oiaN0P3U)

## Getting Started

Open the repository. Then:

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Immediate Next Steps
- Import older photos
- Figure out more permanent file storage system
- Optimize gallery

Basically ensure this platform is scalable to estimated few hundred users, make sure it can operate for years

## (Potential) Future Plans
- Superlative voting, photo submission contests, etc. where photos are made more interactive with social-media-like systems
- Package this software and give it to other schools to use
