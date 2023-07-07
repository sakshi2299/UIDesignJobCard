import React from "react";
import {
  Typography,
  Avatar,
  withStyles,
  Grid,
  Button,
  WithStyles,
  createStyles,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOnOutlined";

interface State {
  showAdditionalSkills: boolean;
}

interface JobCardProps extends WithStyles<typeof styles> {}

const styles = createStyles({
  [`@media (max-width: 600px)`]: {
    parentContainer: {
      flexDirection: "column",
    },
  },
});

class JobCard extends React.Component<JobCardProps, State> {
  constructor(props: JobCardProps) {
    super(props);
    this.state = {
      showAdditionalSkills: false,
    };
  }

  toggleAdditionalSkills = () => {
    this.setState((prevState) => ({
      showAdditionalSkills: !prevState.showAdditionalSkills,
    }));
  };

  render() {
    const { showAdditionalSkills } = this.state;
    const additionalSkills = [
      "Skill 4",
      "Skill 5",
      "Skill 6",
      "Skill 7",
      "Skill 8",
      "Skill 9",
      "Skill 10",
    ];

    const defaultSkills = ["Skill 1", "Skill 2", "Skill 3"];
    const remainingSkills = additionalSkills.slice(3);

    return (
      <div
        style={{ padding: "20px", backgroundColor: "#F6F8FB", margin: "50px" ,alignItems:"center"}}
      >
        <Grid container spacing={4}>
          <Grid item xs={8} sm={8}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  alt="Person Image"
                  src="https://img.freepik.com/free-photo/cheerful-business-woman-standing-isolated_171337-8492.jpg"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#0096FF",
                    borderRadius: "25px",
                    color: "white",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography>Online</Typography>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <Typography>Web Designer | UI/UX Designer</Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon
                    style={{
                      fontSize: "20px",
                      marginRight: "5px",
                      color: "green",
                    }}
                  />
                  <Typography variant="body2">Lativa in Europe</Typography>
                </div>
              </Grid>
            </Grid>
            <Typography style={{ marginTop: "20px", textAlign: "left" }}>
              Has 10 relevant skills to your job
            </Typography>
            <Grid container style={{ marginTop: "10px" }}>
              <Grid item>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {defaultSkills.map((skill, index) => (
                    <Button
                      key={index}
                      style={{
                        marginRight: "3px",
                        backgroundColor: "#008080",
                        color: "white",
                      }}
                    >
                      {skill}
                    </Button>
                  ))}
                  {showAdditionalSkills &&
                    additionalSkills.map((skill, index) => (
                      <Button
                        key={index}
                        style={{
                          marginRight: "3px",
                          backgroundColor: "#008080",
                          color: "white",

                        }}
                      >
                        {skill}
                      </Button>
                    ))}
                  {!showAdditionalSkills && remainingSkills.length > 0 && (
                    <Button
                      onClick={this.toggleAdditionalSkills}
                      style={{ margin: "5px" }}
                    >
                      +{additionalSkills.length}
                    </Button>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm={2}
            style={{ borderLeft: "1px solid lightgrey", marginLeft: "auto" }}
          >
            <Grid container spacing={1} style={{ position: "relative" }}>
              <Grid item style={{ position: "relative", top: "40px" }}>
                <strong style={{ fontSize: "30px", marginLeft: "68px" }}>
                  $10.00
                </strong>
                /hr
              </Grid>
              <Grid
                item
                style={{
                  position: "relative",
                  top: "40px",
                  marginLeft: "80px",
                }}
              >
                <p>Hourly Price</p>
              </Grid>
              <Grid
                item
                style={{ position: "relative", top: "70px", left: "40px" }}
              >
                <Button
                  style={{
                    background: "#0096FF",
                    color: "white",
                    width: "130px",
                    marginLeft: "25px",
                  }}
                >
                  Hire
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(JobCard);
