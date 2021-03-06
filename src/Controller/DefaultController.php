<?php

namespace App\Controller;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/cgu", name="cgu")
     */
    public function cgu(): Response
    {
        return $this->render('information/cgu.html.twig');
    }

    /**
     * @Route("/cookies", name="cookies")
     */
    public function cookies(): Response
    {
        return $this->render('information/cookies.html.twig');
    }

    /**
     * @Route("/ranking", name="ranking")
     */
    public function ranking(): Response
    {
        return $this->render('ranking/ranking.html.twig');
    }
    /**
     * @Route("/mail", name="send_mail")
     */
    public function sendMail(MailerInterface $mailer)
    {
        $email = (new TemplatedEmail())
            ->to('anarchonos1@gmail.com')
            ->from('joffrey.lefebvre@etudiant.univ-reims.fr')
            ->subject('Test d un mail')
            ->htmlTemplate('mail/mail.html.twig')
            ->context([
                'prenom' => 'joffrey',
                'nom' => 'Lefebvre',
            ]);

        $mailer->send($email);
    }
}
