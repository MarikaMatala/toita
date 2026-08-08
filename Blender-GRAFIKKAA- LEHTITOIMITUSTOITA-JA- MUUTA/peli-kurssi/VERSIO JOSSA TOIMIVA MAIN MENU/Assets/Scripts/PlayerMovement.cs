using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour {

    public float movementSpeed;
    public float jumpForce;
    public Rigidbody playerRB;



    // Use this for initialization
    void Start () {
		
	}

    // Update is called once per frame
    void Update()
    {
        if (Input.GetAxis("Horizontal") != 0)
        {
            transform.Translate(new Vector3(movementSpeed * Time.deltaTime
                * Input.GetAxis("Horizontal"), 0, 0));

            if (Input.GetAxisRaw("Horizontal") != 0)
            {
                gameObject.transform.localScale =
                    new Vector3(Input.GetAxisRaw("Horizontal"), 1, 1);
            }

        }

        // Muistaa lisätä 'collider' hahmoon & tasoon, ettei hahmo voi leijailla loputtomiin = kerran 'space' = 1 hyppy

        if (Input.GetButtonDown("Jump")) {

            playerRB.AddForce(Vector3.up * jumpForce);
        }



    }

    void OnTriggerEnter2D(Collider2D other)
    {
        Debug.Log("osuma");
      if(other.gameObject.tag == "PickUp")
        {
            Destroy(other.gameObject);
        }
    }



}
