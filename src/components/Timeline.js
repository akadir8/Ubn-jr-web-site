import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ListIcon from "@mui/icons-material/List";

const articles = [
  { id: 1, title: "Makale 1", date: "18 Mayıs 2023" },
  { id: 2, title: "Makale 2", date: "17 Mayıs 2023" },
  { id: 3, title: "Makale 3", date: "16 Mayıs 2023" },
];

export default function OppositeContentTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
        },
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <TimelineItem>
        <TimelineSeparator sx={{ marginLeft: "-12px" }}>
          <TimelineDot variant="outlined" color="primary" >
            <ListIcon />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: "#0080FF" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ marginTop: "12px", marginLeft:"-7px",paddingBottom: "12px" }}>
          En son çıkan Makaleler;
          <div style={{ borderTop: "1px solid #0080FF", width: "12%" }}></div>
        </TimelineContent>
      </TimelineItem>

      {articles.map((article, index) => (
        <TimelineItem key={article.id}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary"  />
            {index !== articles.length - 1 && (
              <TimelineConnector style={{ backgroundColor: "#0080FF" }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <a href={`/articles/${article.id}`}>{article.title}</a>
            <br />
            <span>{article.date}</span>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
