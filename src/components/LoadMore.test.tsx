import { render, screen } from '@/tests/test-utils';

import {LoadMore} from "@/components/LoadMore";
import {userEvent} from "@testing-library/user-event";
import {mockRouter} from "@/tests/next-router-utils";

describe('LoadMore', () => {
    it('Press button "More" and check url query',  async () => {
        //Arrange
        render(<LoadMore/>);

        //Act
        screen.getByRole('button')

        // Assert
        const moreButton = screen.getByRole('button');
        expect(moreButton).toBeInTheDocument();
        await userEvent.click(moreButton)
        expect(mockRouter).toMatchObject({
            query: {limit: '10'}
        });
    });
});
