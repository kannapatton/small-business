import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Box
} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



const Listings = (props) => {
  const { listings } = props;

  return (
    <Container>
    
    
      <Box
        style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
        display="flex"
        flex-direction={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={8}
        padding={5}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
        sx={{
          ":hover": {
            boxShadow: "8px 8px 8px black",
          },
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Details</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Hours</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listings.map((details, idx) => (
                <TableRow hover key={details.id}>
                  <TableCell>
                    <Link to={`/details/${details.id}`}>
                      <br />
                      More Details
                    </Link>
                  </TableCell>
                  <TableCell>{details.name}</TableCell>
                  <TableCell>{details.description}</TableCell>
                  <TableCell>{details.hours}</TableCell>
                  <TableCell>{details.address}</TableCell>
                  {document.cookie === "loggedIn=true" ? (
                    <TableCell>
                      <HighlightOffIcon
                        style={{ color: "red" }}
                        onClick={() => props.removeBusiness(idx)}
                        className="icon text-red"
                      />
                    </TableCell>
                  ) : null}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Listings;




