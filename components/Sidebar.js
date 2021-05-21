import {Avatar,IconButton,Button} from '@material-ui/core'
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {

    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconContainer>

                <IconButton>
                    <ChatIcons />
                </IconButton>

                <IconButton>
                    <MoreVertIcons />
                </IconButton>

                </IconContainer>
            </Header>

            <Search>
            <IconButton>
                <SearchIcons />
            </IconButton>
                <SearchInput placeholder="Search " />
                
            </Search>
            <SidebarButton>Start New Chat</SidebarButton>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`

`;
const Header = styled.div`
    display: flex;
    top:0;
    position: sticky;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    padding: 15px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;

    
`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity:0.8 ;
    }

`;

const IconContainer = styled.div`

`;

const ChatIcons = styled(ChatIcon)`


`;
const MoreVertIcons = styled(MoreVertIcon)`

`;
const Search = styled.div`
    display: flex;
    align-items: center;
    padding:20px;
    border-radius: 2px;


`;
const SearchIcons = styled(SearchIcon)`

`;
const SearchInput = styled.input`
    outline-width: 0;
    flex:1;
    border:none;
`;
const SidebarButton = styled(Button)`
    width:100%;
    /* become larger box */
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
    
    cursor: pointer;
`;
