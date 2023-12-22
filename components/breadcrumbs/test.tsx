import { render, screen } from '@testing-library/react';
import Breadcrumbs from './index';
import "@testing-library/jest-dom";



const breadcrumbItems: { name: string, link?: string }[] = [
    { name: 'Home', link: '/' },
    { name: 'Assisted living', link: '/assisted-living' },
    { name: 'Texas', link: '/texas' },
    { name: 'Austin' },
    { name: 'Community Name' },
];

describe('Breadcrumbs', () => {
    test('renders breadcrumb links correctly', () => {
        render(<Breadcrumbs items={breadcrumbItems} />);
    
        breadcrumbItems.forEach((item) => {
            if (item.link) {
                const linkElement = screen.getByText(item.name);
                expect(linkElement).toBeInTheDocument();
                expect(linkElement).toHaveAttribute('href', item.link);
            } else {
                const spanElement = screen.getByText(item.name);
                expect(spanElement).toBeInTheDocument();
            }
        });
    });

    test('renders arrow separator', () => {
    
        render(<Breadcrumbs items={breadcrumbItems} />);
        const arrowElements = screen.getAllByRole('separator');
        expect(arrowElements).toHaveLength(breadcrumbItems.length - 1);
    });
});
