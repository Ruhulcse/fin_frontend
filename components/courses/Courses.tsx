import { serverAuthFetch } from '@/lib/helper/fetch';
import Link from 'next/link';
import BasicButton from '../common/BasicButton';
import Course from './Course';

export const getInfo = async () => {
	try {
		const res = await serverAuthFetch(``, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [{}, {}, {}, {}, {}, {}];
	}
};

const Courses = async () => {
	const courses = await getInfo();
	return (
		<section className="course-area">
			<h3 className="section-title text-right">Courses</h3>
			<h4 className="semi-section-title text-right">Gym For Beginners</h4>
			<p className="course-info">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry&apos;s standard dummy text
				ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>
			<BasicButton>
				<Link href="">Join Course Now</Link>
			</BasicButton>
			<div className="courses">
				{courses.map((course: any, index: number) => (
					<Course
						course={course}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Courses;
