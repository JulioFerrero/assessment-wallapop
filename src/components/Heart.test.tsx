import { render, screen } from '@/tests/test-utils';

import {Heart} from "@/components/Heart";
import {userEvent} from "@testing-library/user-event";

describe('Heart component', () => {
    it('Enable heart', async () => {
        //Arrange
        render(<Heart keyItem={1}/>);

        //Act
        await userEvent.click(screen.getByRole('svg'))

        // Assert
        expect(screen.getByRole('svg')).toHaveAttribute("id", "enabled")
    });
    it('Disable heart', async () => {
        //Arrange
        render(<Heart keyItem={1}/>);

        //Act
        await userEvent.click(screen.getByRole('svg'))

        // Assert
        expect(screen.getByRole('svg')).toHaveAttribute("id", "disabled")
    });
});
