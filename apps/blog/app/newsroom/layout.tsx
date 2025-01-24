import Link from 'next/link';
import { categories } from '../lib/categories';
import { RightRail } from '../../components/newsroom/rightRail';

export default function NewsroomLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="newsroom max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between flex-col md:flex-row">
                <main className="w-3/4 w-full">
                    {children}
                </main>
                <div className='w-4/4 md:pl-20 pt-20 md:pt-40 sticky'>
                    <RightRail /></div>
            </div>
        </div>
    );
}