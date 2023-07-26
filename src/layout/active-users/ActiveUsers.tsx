import React from 'react';
import {StyledFamiliar} from "src/layout/section/Familiar";
import {FlexWrapper} from "src/components/flex-wrapper/FlexWrapper";
import {ActiveUser} from "src/layout/active-users/active-user/ActiveUser";

export const ActiveUsers = () => {
    return (
        <StyledFamiliar>
            <h2>Active</h2>
            <FlexWrapper direction={'column'}>
                <ActiveUser/>
                <ActiveUser/>
                <ActiveUser/>
                <ActiveUser/>
            </FlexWrapper>
        </StyledFamiliar>
    );
};

