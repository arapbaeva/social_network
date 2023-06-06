import React from 'react';
import {StyledEmail, StyledFamiliar} from "src/layout/section/Familiar";
import {FlexWrapper} from "src/components/flexWrapper/FlexWrapper";
import {StyledAvatar} from "src/components/styledAvatar/StyledAvatar";
import UserAva from "src/assets/images/img&bg.png";
import {UserName} from "src/components/userName/UserName";
import {Title} from "src/layout/section/Posts";
import {ActiveUser} from "src/components/activeUser/ActiveUser";

export const ActiveUsers = () => {
    return (
        <StyledFamiliar>
            <h2>Active</h2>
            <FlexWrapper direction={'column'}>
                <ActiveUser/>
                {/*<StyledAvatar src={UserAva} width={'34px'} height={'34px'}/>*/}
                {/*<UserName name={'Eddie'} surName={'Lobanovskii'} fontWeight={'400'} />*/}
                {/*<StyledEmail>Online</StyledEmail>*/}
                {/*<Title size={'8px'} weight={'400'} lineHeight={'11px'} opacity={'0.4 '  }>*/}
                {/*    1 min ago*/}
                {/*</Title>*/}

                {/*<StyledAvatar src={UserAva} width={'34px'} height={'34px'}/>*/}
                {/*<UserName name={'Eddie'} surName={'Lobanovskii'} fontWeight={'400'} />*/}
                {/*<StyledEmail>Online</StyledEmail>*/}
                {/*<Title>*/}
                {/*    1 min ago*/}
                {/*</Title>*/}

                {/*<StyledAvatar src={UserAva} width={'34px'} height={'34px'}/>*/}
                {/*<UserName name={'Eddie'} surName={'Lobanovskii'} fontWeight={'400'} />*/}
                {/*<StyledEmail>Online</StyledEmail>*/}
                {/*<Title>*/}
                {/*    1 min ago*/}
                {/*</Title>*/}

                {/*<StyledAvatar src={UserAva} width={'34px'} height={'34px'}/>*/}
                {/*<UserName name={'Eddie'} surName={'Lobanovskii'} fontWeight={'400'} />*/}
                {/*<StyledEmail>Online</StyledEmail>*/}
                {/*<Title>*/}
                {/*    1 min ago*/}
                {/*</Title>*/}
            </FlexWrapper>
        </StyledFamiliar>
    );
};

