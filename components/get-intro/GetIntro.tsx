'use client';
import { useGenderWiseVideoMutation } from '@/store/features/user/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BasicButton from '../common/BasicButton';
import Player from '../common/Player';
const GetIntro = ({ gender }: { gender: string }) => {
	const [video, setVideo] = useState({ src: '' });
	const router = useRouter();
	const [getVideo, { isLoading }] = useGenderWiseVideoMutation();
	useEffect(() => {
		if (gender) {
			getVideo({ gender: gender }).then((res) => setVideo(res.data));
		} else if (!gender) {
			router.push('/');
		}
	}, [gender, getVideo, router]);
	return (
		<section className="container h-full grid grid-rows-[1fr_auto] gap-4 p-4 xl:gap-8 xl:p-8">
			<Player src={video?.src ?? ''} />
			<Link href="/health-declaration">
				<BasicButton
					disabled={isLoading}
					type="submit"
					extraClasses="flex items-center justify-center gap-1 !m-0 !w-full"
				>
					Go to Health Declaration
				</BasicButton>
			</Link>
		</section>
	);
};

export default GetIntro;
