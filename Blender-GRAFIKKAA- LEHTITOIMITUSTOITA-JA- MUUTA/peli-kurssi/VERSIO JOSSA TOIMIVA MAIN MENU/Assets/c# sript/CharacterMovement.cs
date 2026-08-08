using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CharacterMovement : MonoBehaviour
{

    public float movementSpeed;
    public float jumpForce;
    public bool canJump;


    public Animator characterAnimator;
    public Rigidbody2D playerRB;

    // Use this for initialization
    void Start()
    {

        characterAnimator = GetComponent<Animator>();
        playerRB = GetComponent<Rigidbody2D>();

    }

    // Update is called once per frame
    void Update()
    {


        // Jos painetaan oikealle tai vasemmalle, liikutetaan hahmoa
        // ja laitetaan "Walk" trueksi
        // Jos painetaan välilyöntiä, triggeröidään "Jump"

       // Debug.Log(Input.GetAxis("Horizontal"));

        if (Input.GetAxis("Horizontal") != 0)
        {
            transform.Translate(new Vector3(movementSpeed * Time.deltaTime
                * Input.GetAxis("Horizontal"), 0, 0));

            if (Input.GetAxisRaw("Horizontal") != 0)
            {
                gameObject.transform.localScale =
                    new Vector3(Input.GetAxisRaw("Horizontal"), 1, 1);
            }

            characterAnimator.SetBool("Walk", true);

        }
        
        else
        {
           characterAnimator.SetBool("Walk", false);
        }
        
        if (Input.GetButtonDown("Jump") && canJump == true)
        {
            characterAnimator.SetTrigger("Jump");
            // tänne koodi, mikä lähettää pelaajan ylös
            playerRB.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);

        }


    }
    void OnTriggerEnter2D(Collider2D other)
    {
        Debug.Log("osuma");
        if (other.gameObject.tag == "PickUp")
        {
            Destroy(other.gameObject);
        }

    }

    void OnTriggerStay2D(Collider2D other)
    {
        Debug.Log("osuma");
        if (other.gameObject.tag == "Ground")
        {
            canJump = true;
        }

    }

    void OnTriggerExit2D(Collider2D other)
    {
        Debug.Log("osuma");
        if (other.gameObject.tag == "Ground")
        {
            canJump = false;
        }

    }

}
