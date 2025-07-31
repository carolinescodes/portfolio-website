import React from 'react';

const storyData = [
	{
		image: '/Story/fam.jpg',
		title: 'Early Years',
		text: 'Grew up in Vienna, Virginia with my three older brothers and most wonderful parents. I quickly loved all things art, music, and creativity.',
	},
	{
		image: '/Story/hs.jpg',
		title: 'High School in the City',
		text: 'Moved to Georgetown in Washington, DC for high school. Fell in love with city, all girls education, and being pushed academically.',
	},
	{
		image: '/Story/visi.jpg',
		title: 'College Bound',
		text: 'Finished my four years at Georgetown Visitation. Due to my amazing AP Computer Science class, I decided to head to Wake Forest and major in Computer Science.',
	},
	{
		image: '/Story/wake.jpg',
		title: 'Wake Forest',
		text: 'Continually feeling supported by my professors, I stuck with Computer Science and added minors in Math and Studio Art to round out my education.',
	},
	{
		image: '/Story/aflac.jpg',
		title: 'Aflac',
		text: 'I got my first internship at Aflac summer after my sophomore year where I found close mentorship in my boss, who has continued to help shape my career. I was able to develop great interpersonal soft skills to bring into my technical future.',
	},
	{
		image: '/Story/flo.jpg',
		title: 'Semester Abroad',
		text: 'I had the once in a lifetime opportunity to study abroad in Florence, Italy Fall of 2024 where I studied fine art in the art capital of the world.',
	},
	{
		image: '/Story/ge.jpg',
		title: 'GE Aerospace',
		text: 'My experience culminated in my summer internship at GE Aerospace following my junior year, where I have been able to work within the Data Science and Analytics team to grow my skills and tackle new challenges, solidifying my technical abilities.',
	},
];

const MyStorySection = () => {
	return (
		<section id="mystory" className="py-24 relative">
			<div className="absolute inset-0 bg-gradient-to-br from-pink-700 via-purple-900 to-indigo-900 opacity-40 blur-2xl -z-10" />
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="text-4xl font-bold mb-12 text-pink-400 drop-shadow-lg text-center">
					My Story
				</h2>
				<div className="flex flex-col gap-16 relative">
					{storyData.map((step, idx) => (
						<div
							key={idx}
							className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${
								idx % 2 === 0 ? '' : 'md:flex-row-reverse'
							}`}
						>
							<div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
								<img
									src={step.image}
									alt={step.title}
									className="object-cover w-full h-full"
								/>
							</div>
							<div className="max-w-md text-left">
								<h3 className="text-pink-400 text-2xl mb-2">
									{step.title}
								</h3>
								<p className="text-white font-semibold">{step.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyStorySection;
