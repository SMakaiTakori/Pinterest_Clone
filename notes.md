    return pinsData.map((data) => (
    <div key={data.id}>
      <br />
      <br />

      <Container>
        <Card.Img alt="" src={data.previewURL} style={{ width: "16em" }} />
      </Container>

      <Card style={{ width: "16em" }}>
        <Card.Img alt="" src={data.previewURL} />
        <Card.Body>
          <Card.Text>
            Like :{" "}
            <LikeButton
              source={data.previewURL}
              imgSrc={imgSrc}
              setImgSrc={setImgSrc}
            />
            <br />
            Photo Credit: {data.user}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

));
};

export default connect(null, { addFavorites, fetchFavorites })(DisplayImages);
