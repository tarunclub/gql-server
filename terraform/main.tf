provider "aws" {
  region = "us-east-1"  
}

resource "aws_instance" "development-instance" {
  ami           = "ami-0fc5d935ebf8bc3bc"  
  instance_type = "t2.micro"  

  key_name = "aws_login_key"  

  security_groups = ["allow_ssh_http_https"]

  user_data = <<-EOF
              #!/bin/bash
              sudo apt update
              sudo apt install -y docker.io
              sudo docker pull tarunclub/gql-server:1.0.2
              sudo docker run -d -p 80:5000 tarunclub/gql-server:1.0.2
              EOF

  tags = {
    Name = "development-instance"
  }
}

resource "aws_security_group" "allow_ssh_http_https" {
  name        = "allow_ssh_http_https"
  description = "Allow SSH, HTTP, and HTTPS traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "aws_instance_public_dns" {
  value = aws_instance.development-instance.public_dns
}
